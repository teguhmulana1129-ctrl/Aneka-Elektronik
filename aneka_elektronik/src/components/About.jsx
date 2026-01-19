import React from 'react';

const About = () => {
    return (
        <section id="about" className="section bg-secondary">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>About Aneka Elektronik</h2>
                    <p className="about-text">
                        Aneka Elektronik is a dedicated electronics repair service provider committed to bringing your essential home appliances back to life. With years of specialized experience in TV, Rice Cooker, and Electric Iron repairs, we understand how important these devices are to your daily routine.
                    </p>
                    <p className="about-text">
                        Our mission is simple: to provide reliable, transparent, and high-quality repair services that you can trust. We believe in fixing over replacing, helping you save money while reducing electronic waste. Our team of skilled technicians treats every device with the precision and care it deserves.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
