"use client";
import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/Footer.scss';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-mainCol1">
                        <div className="footer-brand">
                            <div className="brand-logo">
                                <img src="/logoFinal11.webp" alt="Connective India" />
                            </div>
                            <p className="description">
                                {t('footer.description')}
                            </p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/connectiveindia" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.instagram.com/theconnectiveindia/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaInstagram />
                                </a>
                                {/* <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaLinkedinIn />
                                </a> */}
                                <a href="https://www.youtube.com/@connectiveindia" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-mainCol2">
                        <div className="footer-column">
                            <h4>{t('footer.contactUs')}</h4>
                            <div className="contact-info">
                                <div className="contact-item2">
                                    <p>{t('footer.info.legalEntityName')}</p>
                                    <span>Connective India</span>
                                </div>
                                <div className="contact-item2">
                                    <p>{t('footer.info.registeredAddress')}</p>
                                    <span>Jewel Planet Apartment, <br />Building No.1104, Flat No. 5 F, <br />Kochi, Kerala, 682019</span>
                                </div>
                                {/* <div className="contact-item">
                                    <FaMapMarkerAlt />
                                    <span>{t('footer.location')}</span>
                                </div> */}
                                <div className="contact-item2">
                                    <p>Email</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <a href="mailto:ceo@connectiveindia.in">ceo@connectiveindia.in</a>
                                        <a href="mailto:theconnectiveindia@gmail.com">theconnectiveindia@gmail.com</a>
                                        <a href="mailto:cu@connectiveindia.in">cu@connectiveindia.in</a>
                                    </div>
                                </div>
                                {/* <div className="contact-item">
                                    <FaPhone />
                                    <span>1800-XXX-XXXX (Toll Free)</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="footer-column">
                            <h4>{t('footer.resources')}</h4>
                            <ul>
                                <li><Link href="/">{t('header.home')}</Link></li>
                                <li><Link href="/about">{t('header.about')}</Link></li>
                                <li><Link href="/how-it-works">{t('header.howItWorks')}</Link></li>
                                <li><Link href="/what-we-do">{t('header.whatWeDo')}</Link></li>
                                <li><Link href="/careers">{t('header.careers')}</Link></li>
                                <li><Link href="/contact">{t('header.contact')}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>{t('footer.legal')}</h4>
                            <ul>
                                <li><Link href="/terms">{t('footer.terms')}</Link></li>
                                <li><Link href="/privacy">{t('footer.privacy')}</Link></li>
                                <li><Link href="/refund-cancellation-policy">{t('footer.refundPolicy')}</Link></li>
                                <li><Link href="/faq">{t('footer.faq')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottomCol1">
                        <p>&copy; 2026 Connective India. {t('footer.allRightsReserved')}</p>
                    </div>
                    <div className="footer-bottomCol2">
                        <div className="design-pill">
                            <span>{t('footer.designedWith')}</span>
                            <span className="heart">❤️</span>
                            <span className="separator"></span>
                            <a href="https://esightsolutions.in" target="_blank" rel="noopener noreferrer" className="dev-link">
                                <img src="/esight-logo-white.png" alt="eSight Solutions" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
