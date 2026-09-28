import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
    icon,
    ...props
}) => {
    const buttonClass = [
        'custom-button',
        `button-${variant}`,
        `button-${size}`,
        fullWidth ? 'button-full-width' : '',
        disabled ? 'button-disabled' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="button-icon">{icon}</span>}
            <span className="button-text">{children}</span>
        </button>
    );
};

export default Button;
