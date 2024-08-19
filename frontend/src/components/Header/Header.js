import React from 'react';
import logoImage from './header.png'
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-image" />| Help Center
            </div>
            <button className="submit-request">Submit a request</button>
        </header>
    );
}

export default Header;