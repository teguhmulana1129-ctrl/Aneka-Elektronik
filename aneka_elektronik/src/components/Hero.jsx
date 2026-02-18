import React from 'react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/indonesian_technician.webp';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
    const [ref, isVisible] = useScrollReveal();
    const { t } = useTranslation();

    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }} ref={ref}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className={`hero-title fade-in-up ${isVisible ? 'visible' : ''}`}>
                    {t('hero.title')}
                </h1>
                <p className={`hero-subtitle fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    {t('hero.subtitle')}
                </p>
                <div className={`hero-buttons fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                    <a href="#services" className="btn btn-primary">
                        {t('hero.cta_book')}
                    </a>
                    <a href="#contact" className="btn btn-secondary glass-btn">
                        {t('hero.cta_contact')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
