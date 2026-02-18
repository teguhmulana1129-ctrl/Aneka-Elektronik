import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        device: 'TV (LED / LCD)',
        message: ''
    });

    const handleWhatsAppSubmit = () => {
        const phoneNumber = "628123423575"; // Admin phone number
        const text = `Hello Aneka Elektronik,%0A%0AMy name is *${formData.name}*.%0AI would like to repair my *${formData.device}*.%0A%0ADescription:%0A${formData.message}%0A%0APhone: ${formData.phone}`;

        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="section section-light">
            <div className="container">
                <h2 className="section-title">{t('contact.title')}</h2>
                <p className="section-subtitle">{t('contact.subtitle')}</p>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <div className="contact-item">
                            <Phone className="contact-icon" />
                            <div>
                                <h4>{t('contact.info.call')}</h4>
                                <p>0812-3423-575</p>
                                <a href="https://wa.me/628123423575" target="_blank" rel="noopener noreferrer" className="text-accent">https://wa.me/628123423575</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <MapPin className="contact-icon" />
                            <div>
                                <h4>{t('contact.info.area')}</h4>
                                <p>{t('contact.info.location')}</p>
                                <p>{t('contact.info.address')}</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Clock className="contact-icon" />
                            <div>
                                <h4>{t('contact.info.hours')}</h4>
                                <p>{t('contact.info.days')}</p>
                                <p>{t('contact.info.closed')}</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label>{t('contact.form.name')}</label>
                            <input
                                type="text"
                                placeholder={t('contact.form.name_placeholder')}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>{t('contact.form.phone')}</label>
                            <input
                                type="tel"
                                placeholder={t('contact.form.phone_placeholder')}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>{t('contact.form.device')}</label>
                            <select
                                value={formData.device}
                                onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                            >
                                <option value="TV Repair">{t('services.items.tv-repair.title')}</option>
                                <option value="Rice Cooker Repair">{t('services.items.rice-cooker-repair.title')}</option>
                                <option value="Electric Iron Repair">{t('services.items.electric-iron-repair.title')}</option>
                                <option value="Other">{t('nav.contact')}</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>{t('contact.form.issue')}</label>
                            <textarea
                                rows="4"
                                placeholder={t('contact.form.issue_placeholder')}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            onClick={handleWhatsAppSubmit}
                        >
                            {t('contact.form.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
