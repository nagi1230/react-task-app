import React from 'react';
import './PublicLayout.css';

const PublicLayout = ({ children }) => {
    return (
        <div className="public-layout">
            <div className="public-content">
                {children}
            </div>
        </div>
    );
};

export default PublicLayout;
