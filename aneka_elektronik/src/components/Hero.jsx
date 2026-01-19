import React from 'react';
import heroBg from '../assets/indonesian_technician.webp';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title fade-in-up">
                    Professional Electronics Repair Services
                </h1>
                <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
                    TV, Rice Cooker & Electric Iron Repair
                </p>
                <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#contact" className="btn btn-primary">
                        Book Service Now
                    </a>
                    <a href="#contact" className="btn btn-secondary glass-btn">
                        Contact Technician
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
