import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    Aneka Elektronik
                </a>
                <div className="nav-links">
                    <a href="#services">Services</a>
                    <a href="#why-us">Why Us</a>
                    <a href="#process">Process</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#about">About</a>
                    <a href="#contact" className="btn btn-primary btn-sm">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
