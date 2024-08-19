import React from 'react';
import logoImage from './footer.png'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Abstract</h3>
                    <ul>
                        <li>Branches</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Community</h3>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribbble</li>
                        <li>Podcast</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>
                    </ul>
                    <h3>Contact Us</h3>
                    <p>info@abstract.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">

                </div>
                <div className="footer-copyright">
                    <img src={logoImage} alt="Logo" />
                    <p>© Copyright 2022</p>
                    <p>Abstract Studio Design, Inc.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
