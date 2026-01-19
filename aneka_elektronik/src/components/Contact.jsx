import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Ready to fix your device? Contact us today.</p>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="contact-item">
                            <Phone className="contact-icon" />
                            <div>
                                <h4>Call / WhatsApp</h4>
                                <p>+62 812-3456-7890</p>
                                <a href="#" className="text-accent">Chat on WhatsApp</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <MapPin className="contact-icon" />
                            <div>
                                <h4>Service Area</h4>
                                <p>Jakarta Selatan & Surrounding Areas</p>
                                <p>Jalan Radio Dalam No. 123</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Clock className="contact-icon" />
                            <div>
                                <h4>Working Hours</h4>
                                <p>Mon - Sat: 08:00 - 18:00</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Your Phone Number" />
                        </div>
                        <div className="form-group">
                            <label>Device Type</label>
                            <select>
                                <option>TV (LED / LCD)</option>
                                <option>Rice Cooker (Magicom)</option>
                                <option>Electric Iron (Setrika)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Issue Description</label>
                            <textarea rows="4" placeholder="Describe the problem..."></textarea>
                        </div>
                        <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
