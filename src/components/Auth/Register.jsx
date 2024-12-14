import React, { useState } from 'react';
import api from '../../services/api';
import styles from '../../styles/Register.module.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        preferences: '',
        role: 'user',
        adminSecret: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', {
                ...formData,
                preferences: formData.preferences.split(','),
            });
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Register</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="text"
                    name="preferences"
                    placeholder="Event Preferences (comma-separated)"
                    value={formData.preferences}
                    onChange={handleChange}
                    className={styles.input}
                />
                <select 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange}
                    className={styles.select}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                {formData.role === 'admin' && (
                    <input
                        type="password"
                        name="adminSecret"
                        placeholder="Admin Secret"
                        value={formData.adminSecret}
                        onChange={handleChange}
                        className={styles.input}
                    />
                )}
                <button type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    );
};

export default Register;
