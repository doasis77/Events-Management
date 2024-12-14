import React, { useState, useEffect } from 'react';
import DashboardNavbar from './DashboardNavbar';
import api from '../../services/api';
import styles from '../../styles/Dashboard.module.css';

const AdminDashboard = () => {
    const [events, setEvents] = useState([]);
    const [stats, setStats] = useState({
        totalEvents: 0,
        totalRSVPs: 0,
        upcomingEvents: 0
    });

    useEffect(() => {
        fetchEvents();
        fetchStats();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await api.get('/events');
            setEvents(response.data.data || []);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const fetchStats = async () => {
        try {
            const response = await api.get('/admin/stats');
            setStats(response.data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const handleDeleteEvent = async (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                await api.delete(`/events/${eventId}`);
                fetchEvents();
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        }
    };

    return (
        <div className={styles.dashboardContainer}>
            <DashboardNavbar isAdmin={true} />
            <div className={styles.content}>
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3>Total Events</h3>
                        <p>{stats.totalEvents}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Total RSVPs</h3>
                        <p>{stats.totalRSVPs}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Upcoming Events</h3>
                        <p>{stats.upcomingEvents}</p>
                    </div>
                </div>

                <div className={styles.eventsSection}>
                    <h2>Manage Events</h2>
                    <div className={styles.eventsGrid}>
                        {events.map(event => (
                            <div key={event._id} className={styles.eventCard}>
                                <h3>{event.name}</h3>
                                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                                <p>Time: {event.time}</p>
                                <p>Location: {event.location}</p>
                                <p>Available Seats: {event.availableSeats}</p>
                                <div className={styles.cardActions}>
                                    <button 
                                        onClick={() => handleDeleteEvent(event._id)}
                                        className={styles.deleteButton}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;