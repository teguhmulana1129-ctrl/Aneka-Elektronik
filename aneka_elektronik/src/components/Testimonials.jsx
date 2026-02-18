import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';

const Testimonials = () => {
    const { t } = useTranslation();
    const reviews = t('testimonials.reviews', { returnObjects: true }) || [];

    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="testimonials" className="section section-light" ref={ref}>
            <div className={`container fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">{t('testimonials.title')}</h2>
                <p className="section-subtitle">{t('testimonials.subtitle')}</p>

                <div className="grid-3">
                    {Array.isArray(reviews) && reviews.map((review, index) => (
                        <div key={index} className={`review-card fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="review-author">- {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
