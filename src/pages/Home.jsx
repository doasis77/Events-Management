import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.hero}>
                <h1 className={styles.mainTitle}>
                    Campus Event Management System
                </h1>
                <p className={styles.subtitle}>
                    Discover, Create, and Manage Campus Events Seamlessly
                </p>
                <div className={styles.buttonGroup}>
                    <Link to="/login" className={`${styles.button} ${styles.primaryButton}`}>
                        Sign In
                    </Link>
                    <Link to="/register" className={`${styles.button} ${styles.secondaryButton}`}>
                        Create Account
                    </Link>
                </div>
            </div>

            <div className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
                <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📅</div>
                        <h3>Easy Event Planning</h3>
                        <p>Create and manage events with just a few clicks</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎯</div>
                        <h3>Smart Targeting</h3>
                        <p>Reach the right audience for your events</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📊</div>
                        <h3>Real-time Analytics</h3>
                        <p>Track attendance and engagement metrics</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🤝</div>
                        <h3>Community Building</h3>
                        <p>Connect with peers and build networks</p>
                    </div>
                </div>
            </div>

            <div className={styles.ctaSection}>
                <h2>Ready to Get Started?</h2>
                <p>Join our community and start managing your campus events today!</p>
                <Link to="/register" className={`${styles.button} ${styles.ctaButton}`}>
                    Get Started Now
                </Link>
            </div>

            <footer className={styles.footer}>
                <p>&copy; 2024 Campus Event Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;