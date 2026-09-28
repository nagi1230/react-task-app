import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { icon: '👤', text: 'My Profile', path: '/profile' },
        { icon: '🎁', text: 'Redeem Points', path: '/redeem', badge: '8' },
        { icon: '👥', text: 'Refer Your Friend', path: '/refer', badge: '8' },
        { icon: '⚙️', text: 'Settings', path: '/settings' }
    ];

    return (
        <aside className="profile-sidebar">
            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <span className="sidebar-icon">{item.icon}</span>
                        <span className="sidebar-text">{item.text}</span>
                        {item.badge && (
                            <span className="sidebar-badge">{item.badge}</span>
                        )}
                        <span className="sidebar-arrow">›</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;