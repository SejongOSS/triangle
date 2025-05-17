import React from 'react';
import './UnderlineText.css';

const UnderlineText = ({ text, onClick, isActive }) => {
    return (
        <div className="underline-text-container" onClick={onClick}>
            <span className="underline-text">{text}</span>
            {isActive && <div className="underline" />}
        </div>
    );
};

export default UnderlineText;
