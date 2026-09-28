import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    // If user is authenticated, redirect to private route (don't allow access to public routes)
    if (isAuthenticated) {
        return <Navigate to="/profile" replace />;
    }

    return children;
};

export default PublicRoute;
