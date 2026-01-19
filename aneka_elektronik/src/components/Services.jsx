import React from 'react';
import tvImg from '../assets/television.webp';
import riceImg from '../assets/rice_cooker.webp';
import ironImg from '../assets/electric_iron.webp';

const Services = () => {
    const services = [
        {
            title: "TV Repair",
            desc: "Expert repair for LED, LCD, and Smart TVs. Screen replacement, motherboard repair, and power issues.",
            img: tvImg
        },
        {
            title: "Rice Cooker Repair",
            desc: "Fixing heating issues, sensor faults, and digital control problems for all Magicom brands.",
            img: riceImg
        },
        {
            title: "Electric Iron Repair",
            desc: "Fast service for heating elements, thermostat calibration, and cord replacement.",
            img: ironImg
        }
    ];

    return (
        <section id="services" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">Our Expertise</h2>
                <p className="section-subtitle">Specialized care for your essential home electronics.</p>

                <div className="grid-3">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-img-wrapper">
                                <img src={service.img} alt={service.title} className="service-img" />
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <a href="#contact" className="service-link">Learn more &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
