import React from 'react';

const Process = () => {
    const steps = [
        { num: "01", title: "Contact Us", desc: "Reach out via WhatsApp or our form to schedule." },
        { num: "02", title: "Diagnosis", desc: "We inspect your device and identify the issue." },
        { num: "03", title: "Repair", desc: "Expert technicians fix your device with precision." },
        { num: "04", title: "Testing", desc: "Rigorous quality checks to ensure full functionality." },
        { num: "05", title: "Support", desc: "Enjoy your fixed device with our warranty backing." }
    ];

    return (
        <section id="process" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">A simple, transparent process designed for your convenience.</p>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
