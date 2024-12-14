import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
        return <Navigate to="/" />;
    }

    if (requiredRole && role !== requiredRole) {
        // Redirect non-admin users to user dashboard
        return role === 'user' ? <Navigate to="/dashboard" /> : <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
