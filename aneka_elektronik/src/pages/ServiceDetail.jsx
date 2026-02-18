import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.id === slug);
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service) {
        return (
            <div className="container section" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>{t('services.not_found')}</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>{t('services.back_to_home')}</Link>
            </div>
        );
    }

    const tPath = `services.items.${service.id}`;

    return (
        <div className="service-detail-page" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
            <div className="container">
                <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', fontWeight: '700', color: '#1E293B', textDecoration: 'none' }}>
                    &larr; {t('services.back_to_services')}
                </Link>

                <div className="detail-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 450px) 1fr', gap: '64px', alignItems: 'start' }}>
                    <div className="detail-image-wrapper" style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-lg)' }}>
                        <img src={service.img} alt={t(`${tPath}.title`)} style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
                    </div>

                    <div className="detail-content">
                        <div style={{ marginBottom: '24px' }}>
                            <span style={{ background: '#F1F5F9', color: '#0B2545', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid #E2E8F0' }}>{t('services.professional')}</span>
                        </div>
                        <h1 style={{ fontSize: '48px', marginBottom: '16px', color: '#2D9CDB', letterSpacing: '-0.02em', fontWeight: '800' }}>{t(`${tPath}.title`)}</h1>
                        <p style={{ fontSize: '20px', color: '#334155', marginBottom: '40px', lineHeight: '1.6', fontWeight: '500' }}>{t(`${tPath}.details`)}</p>

                        <div className="rich-text-content" style={{ color: '#1E293B', lineHeight: '1.8' }}
                            dangerouslySetInnerHTML={{ __html: t(`${tPath}.long`) }} />

                        <div style={{ marginTop: '48px', padding: '40px', background: '#F8FAFC', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '22px', color: '#0B2545', fontWeight: '700' }}>{t('services.need_repair')}</h4>
                            <p style={{ marginBottom: '24px', color: '#475569', fontSize: '16px' }}>{t('services.technician_ready')}</p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <a href="https://wa.me/628123423575" target="_blank" rel="noreferrer" className="btn btn-primary">{t('contact.info.chat_wa')}</a>
                                <Link to="/" className="btn btn-secondary" style={{ color: '#1E293B', borderColor: '#CBD5E1' }}>{t('nav.services')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple CSS for responsive layout */}
            <style>{`
                @media (max-width: 900px) {
                    .detail-layout {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    .detail-image-wrapper {
                        max-width: 400px;
                        margin: 0 auto;
                    }
                }
             `}</style>
        </div>
    );
};

export default ServiceDetail;
