import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="/" className="logo">
                    <img src={logoImg} alt="Aneka Elektronik" style={{ height: '160px', width: 'auto', margin: '-40px 0' }} />
                </a>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop and Mobile Links */}
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/#services" onClick={() => setIsOpen(false)}>{t('nav.services')}</a>
                    <a href="/#why-us" onClick={() => setIsOpen(false)}>{t('nav.why_us')}</a>
                    <a href="/#process" onClick={() => setIsOpen(false)}>{t('nav.process')}</a>
                    <a href="/#testimonials" onClick={() => setIsOpen(false)}>{t('nav.testimonials')}</a>
                    <a href="/#contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>

                    <div className="language-switcher">
                        <button
                            className={`lang-btn ${i18n.language === 'id' ? 'active' : ''}`}
                            onClick={() => changeLanguage('id')}
                        >
                            ID
                        </button>
                        <span className="lang-divider">|</span>
                        <button
                            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                        >
                            EN
                        </button>
                    </div>

                    <a href="/#contact" className="btn btn-primary btn-sm" onClick={() => setIsOpen(false)}>{t('hero.cta_book')}</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
