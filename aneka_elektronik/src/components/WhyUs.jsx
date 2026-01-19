import React from 'react';
import { Award, ShieldCheck, Zap, Tag, Heart } from 'lucide-react';

const WhyUs = () => {
    const features = [
        {
            icon: <Award size={32} />,
            title: "Experienced Technicians",
            desc: "Skilled professionals with years of expertise in electronics repair."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Service Warranty",
            desc: "We stand by our work with a reliable warranty on all repairs."
        },
        {
            icon: <Zap size={32} />,
            title: "Fast Response",
            desc: "Quick diagnosis and efficient repair times to get you back to normal."
        },
        {
            icon: <Tag size={32} />,
            title: "Transparent Pricing",
            desc: "No hidden fees. We provide clear quotes before starting any work."
        },
        {
            icon: <Heart size={32} />,
            title: "Careful Handling",
            desc: "We treat your devices with the utmost care and respect."
        }
    ];

    return (
        <section id="why-us" className="section">
            <div className="container">
                <h2 className="section-title">Why Choose Us</h2>
                <p className="section-subtitle">We prioritize quality, trust, and your satisfaction.</p>

                <div className="why-us-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
