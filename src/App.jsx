import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EventList from './components/Events/EventList';
import EventCreation from './components/Events/EventCreation';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import CalendarView from './components/Calendar/CalendarView';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home page */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/admin/create-event" element={
                    <PrivateRoute requiredRole="admin">
                        <EventCreation />
                    </PrivateRoute>
                } />
                <Route path="/admin/dashboard" element={
                    <PrivateRoute requiredRole="admin">
                        <AdminDashboard />
                    </PrivateRoute>
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute requiredRole="user">
                        <UserDashboard />
                    </PrivateRoute>
                } />
                <Route path="/calendar" element={<CalendarView />} />
            </Routes>
        </Router>
    );
};

export default App;
