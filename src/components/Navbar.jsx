import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Auth/Logout';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">Event Management</Link>
            </div>
            <div className={styles.navLinks}>
                <Link to="/events">Events</Link>
                <Link to="/calendar">Calendar</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Logout />
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;