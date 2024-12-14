import React, { useState } from 'react';
import api from '../../services/api';
import styles from '../../styles/EventCreation.module.css';

const EventCreation = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        location: '',
        capacity: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            await api.post('/events', formData, config);
            alert('Event created successfully!');
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Create Event</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Event Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="number"
                    name="capacity"
                    placeholder="Capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default EventCreation;
