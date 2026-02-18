import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../data/services';
import useScrollReveal from '../hooks/useScrollReveal';

const Services = () => {
    const [ref, isVisible] = useScrollReveal();
    const { t } = useTranslation();

    return (
        <section id="services" className="section section-light" ref={ref}>
            <div className={`container fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">{t('services.title')}</h2>
                <p className="section-subtitle">{t('services.subtitle')}</p>

                <div className="grid-3">
                    {servicesData.map((service, index) => (
                        <div key={index} className={`service-card fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="service-img-wrapper">
                                <img src={service.img} alt={t(`services.items.${service.id}.title`)} className="service-img" />
                            </div>
                            <div className="service-content">
                                <h3>{t(`services.items.${service.id}.title`)}</h3>
                                <p>{t(`services.items.${service.id}.desc`)}</p>
                                <Link to={`/service/${service.id}`} className="service-link">
                                    {t('services.learn_more')}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
