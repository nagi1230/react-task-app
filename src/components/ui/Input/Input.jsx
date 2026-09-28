import React from 'react';
import './Input.css';

const Input = ({
    label,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    error,
    disabled = false,
    required = false,
    icon,
    className = '',
    fullWidth = true,
    ...props
}) => {
    const inputContainerClass = [
        'input-container',
        fullWidth ? 'input-full-width' : '',
        error ? 'input-error-state' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={inputContainerClass}>
            {label && (
                <label className="input-label">
                    {label}
                    {required && <span className="input-required">*</span>}
                </label>
            )}

            <div className="input-wrapper">
                {icon && <span className="input-icon">{icon}</span>}
                <input
                    type={type}
                    className={`custom-input ${icon ? 'input-with-icon' : ''}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    {...props}
                />
            </div>

            {error && <span className="input-error-message">{error}</span>}
        </div>
    );
};

export default Input;
