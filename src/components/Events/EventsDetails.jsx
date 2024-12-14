import React from 'react';
import api from '../../services/api';
import styles from '../../styles/EventDetails.module.css';

const EventDetails = ({ event }) => {
    const handleRSVP = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: token } };
            await api.put(`/events/${event._id}/rsvp`, {}, config);
            alert('RSVP Successful!');
        } catch (error) {
            console.error('Error RSVP-ing:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{event.name}</h3>
            <p className={styles.info}>{event.date}</p>
            <p className={styles.info}>{event.location}</p>
            <button 
                onClick={handleRSVP} 
                className={styles.rsvpButton}
            >
                RSVP
            </button>
        </div>
    );
};

export default EventDetails;
