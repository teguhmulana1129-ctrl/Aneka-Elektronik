import React from 'react';
import { Award, ShieldCheck, Zap, Tag, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';

const WhyUs = () => {
    const { t } = useTranslation();
    const features = [
        {
            icon: <Award size={32} />,
            titleKey: "why_us.features.technicians.title",
            descKey: "why_us.features.technicians.desc"
        },
        {
            icon: <ShieldCheck size={32} />,
            titleKey: "why_us.features.warranty.title",
            descKey: "why_us.features.warranty.desc"
        },
        {
            icon: <Zap size={32} />,
            titleKey: "why_us.features.fast.title",
            descKey: "why_us.features.fast.desc"
        },
        {
            icon: <Tag size={32} />,
            titleKey: "why_us.features.pricing.title",
            descKey: "why_us.features.pricing.desc"
        },
        {
            icon: <Heart size={32} />,
            titleKey: "why_us.features.handling.title",
            descKey: "why_us.features.handling.desc"
        }
    ];

    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="why-us" className="section section-light" ref={ref}>
            <div className={`container fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">{t('why_us.title')}</h2>
                <p className="section-subtitle">{t('why_us.subtitle')}</p>

                <div className="why-us-grid">
                    {features.map((feature, index) => (
                        <div key={index} className={`feature-card fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="feature-header">
                                <div className="feature-icon-box">
                                    {feature.icon}
                                </div>
                            </div>
                            <div className="feature-body">
                                <h3>{t(feature.titleKey)}</h3>
                                <p>{t(feature.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
