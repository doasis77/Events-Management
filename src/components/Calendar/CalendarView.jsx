import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import api from '../../services/api';
import 'react-calendar/dist/Calendar.css';
import styles from '../../styles/CalendarView.module.css';

const CalendarView = () => {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState(['all']);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await api.get('/events');
            const eventData = response.data.data || [];
            setEvents(eventData);

            // Extract unique categories
            const uniqueCategories = ['all', ...new Set(eventData.map(event => event.category))];
            setCategories(uniqueCategories);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        const isSameDate = eventDate.toDateString() === selectedDate.toDateString();
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return isSameDate && matchesCategory;
    });

    const tileClassName = ({ date }) => {
        const hasEvent = events.some(event => 
            new Date(event.date).toDateString() === date.toDateString()
        );
        return hasEvent ? styles.tileWithEvent : null;
    };

    const handleRSVP = async (eventId) => {
        try {
            await api.put(`/events/${eventId}/rsvp`);
            fetchEvents(); // Refresh events after RSVP
            alert('RSVP successful!');
        } catch (error) {
            alert('Failed to RSVP: ' + error.message);
        }
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
                <h1>Event Calendar</h1>
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={styles.categoryFilter}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.calendarWrapper}>
                <Calendar 
                    onChange={setSelectedDate}
                    value={selectedDate}
                    tileClassName={tileClassName}
                    className={styles.calendar}
                />
            </div>

            <div className={styles.eventsList}>
                <h2>Events on {selectedDate.toLocaleDateString()}</h2>
                {filteredEvents.length > 0 ? (
                    <div className={styles.eventsGrid}>
                        {filteredEvents.map(event => (
                            <div key={event._id} className={styles.eventCard}>
                                <div className={styles.eventHeader}>
                                    <h3>{event.name}</h3>
                                    <span className={styles.category}>{event.category}</span>
                                </div>
                                <div className={styles.eventDetails}>
                                    <p>
                                        <i className="far fa-clock"></i>
                                        {event.time}
                                    </p>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>
                                        {event.location}
                                    </p>
                                    <p>
                                        <i className="fas fa-users"></i>
                                        Available Seats: {event.availableSeats}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => handleRSVP(event._id)}
                                    disabled={event.availableSeats <= 0}
                                    className={styles.rsvpButton}
                                >
                                    {event.availableSeats > 0 ? 'RSVP Now' : 'Fully Booked'}
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.noEvents}>No events scheduled for this date</p>
                )}
            </div>
        </div>
    );
};

export default CalendarView;
