import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="section section-light">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>{t('about.title')}</h2>
                    <p className="about-text">
                        {t('about.p1')}
                    </p>
                    <p className="about-text">
                        {t('about.p2')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
