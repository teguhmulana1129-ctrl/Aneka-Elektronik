import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Aneka Elektronik</h3>
                        <p>Your trusted partner for home electronics repair.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Aneka Elektronik. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
