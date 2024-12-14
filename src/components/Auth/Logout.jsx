import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Logout.module.css';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear token and any user data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        // Redirect to login page
        navigate('/login');
    };

    return (
        <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
        </button>
    );
};

export default Logout; 