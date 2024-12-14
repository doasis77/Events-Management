import React, { useState, useEffect } from 'react';
import DashboardNavbar from './DashboardNavbar';
import api from '../../services/api';
import styles from '../../styles/Dashboard.module.css';

const UserDashboard = () => {
    const [rsvpEvents, setRsvpEvents] = useState([]);
    const [userStats, setUserStats] = useState({
        totalRSVPs: 0,
        upcomingRSVPs: 0
    });

    useEffect(() => {
        fetchUserEvents();
        fetchUserStats();
    }, []);

    const fetchUserEvents = async () => {
        try {
            const response = await api.get('/user/events');
            setRsvpEvents(response.data.rsvpEvents || []);
        } catch (error) {
            console.error('Error fetching user events:', error);
        }
    };

    const fetchUserStats = async () => {
        try {
            const response = await api.get('/user/stats');
            setUserStats(response.data);
        } catch (error) {
            console.error('Error fetching user stats:', error);
        }
    };

    const cancelRSVP = async (eventId) => {
        if (window.confirm('Are you sure you want to cancel this RSVP?')) {
            try {
                await api.delete(`/events/${eventId}/rsvp`);
                fetchUserEvents();
            } catch (error) {
                console.error('Error canceling RSVP:', error);
            }
        }
    };

    return (
        <div className={styles.dashboardContainer}>
            <DashboardNavbar isAdmin={false} />
            <div className={styles.content}>
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3>Your RSVPs</h3>
                        <p>{userStats.totalRSVPs}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Upcoming Events</h3>
                        <p>{userStats.upcomingRSVPs}</p>
                    </div>
                </div>

                <div className={styles.eventsSection}>
                    <h2>Your RSVP'd Events</h2>
                    <div className={styles.eventsGrid}>
                        {rsvpEvents.map(event => (
                            <div key={event._id} className={styles.eventCard}>
                                <h3>{event.name}</h3>
                                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                                <p>Time: {event.time}</p>
                                <p>Location: {event.location}</p>
                                <div className={styles.cardActions}>
                                    <button 
                                        onClick={() => cancelRSVP(event._id)}
                                        className={styles.cancelButton}
                                    >
                                        Cancel RSVP
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

export default UserDashboard;