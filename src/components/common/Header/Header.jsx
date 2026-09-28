import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const navigate = useNavigate()

    const handleNavigation = (route) => {
        navigate(route)

    }
    return (
        <header className="profile-header">
            <div className="header-content">
                <div className="logo-section">
                    <div className="logo-icon">🐱</div>
                    <h1 className="logo-text">Troller Cat</h1>
                </div>

                <nav className="header-nav">
                    <Link to="/pay" className="nav-link">Play</Link>
                    <Link to="/rewards" className="nav-link">Rewards</Link>
                    <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
                </nav>

                <div className="header-actions">
                    <div className="coins-display">
                        <span className="coin-icon">🪙</span>
                        <span className="coin-amount">10,000.00</span>
                    </div>
                    <Link to="/profile" className="profile-icon">
                        <span className="user-icon">👤</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;