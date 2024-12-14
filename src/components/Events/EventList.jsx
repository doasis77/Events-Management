import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import styles from '../../styles/EventList.module.css';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events');
                setEvents(response.data.data || []);
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents([]);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.pageTitle}>Upcoming Events</h2>
            {Array.isArray(events) && events.length > 0 ? (
                events.map((event) => (
                    <div key={event._id} className={styles.eventCard}>
                        <h3 className={styles.eventTitle}>{event.name}</h3>
                        <p className={styles.eventInfo}>Date: {new Date(event.date).toLocaleDateString()}</p>
                        <p className={styles.eventInfo}>Time: {event.time}</p>
                        <p className={styles.eventInfo}>Location: {event.location}</p>
                        <p className={styles.seats}>
                            Available Seats: {event.availableSeats}
                        </p>
                    </div>
                ))
            ) : (
                <p>No events available</p>
            )}
        </div>
    );
};

export default EventList;
