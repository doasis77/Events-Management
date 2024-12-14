import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/DashboardNavbar.module.css';

const DashboardNavbar = ({ isAdmin }) => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'))?.name || 'User';

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftSection}>
                <h2>{isAdmin ? 'Admin Dashboard' : 'User Dashboard'}</h2>
            </div>
            <div className={styles.rightSection}>
                <span className={styles.userName}>Welcome, {userName}</span>
                <div className={styles.navLinks}>
                    <Link to="/events">Events</Link>
                    <Link to="/calendar">Calendar</Link>
                    {isAdmin && <Link to="/admin/create-event">Create Event</Link>}
                </div>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default DashboardNavbar; 