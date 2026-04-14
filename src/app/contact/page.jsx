"use client";
import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { AiOutlineYoutube } from "react-icons/ai";
import { useLanguage } from '../../context/LanguageContext';

import { FaGlobe } from "react-icons/fa";
import '@/styles/pages/Contact.scss';
import PageBanner from '@/components/PageBanner';

const ContactPage = () => {
    const { t } = useLanguage();
    const recaptchaRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ loading: false, message: '', type: '' });

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Full name is required";
        else if (formData.name.trim().length < 3) tempErrors.name = "Name must be at least 3 characters";

        if (!formData.email) tempErrors.email = "Email address is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email address is invalid";

        if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
        else if (formData.subject.trim().length < 5) tempErrors.subject = "Subject must be at least 5 characters";

        if (!formData.message.trim()) tempErrors.message = "Message is required";
        else if (formData.message.trim().length < 10) tempErrors.message = "Message must be at least 10 characters";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const token = recaptchaRef.current.getValue();
        if (!token) {
            setStatus({ loading: false, message: 'Please verify that you are not a robot.', type: 'error' });
            setTimeout(() => setStatus({ loading: false, message: '', type: '' }), 5000);
            return;
        }

        setStatus({ loading: true, message: 'Sending...', type: 'info' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, recaptchaToken: token }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ loading: false, message: 'Thank you for your message. We will get back to you soon!', type: 'success' });
                setFormData({ name: '', email: '', subject: '', message: '' });
                recaptchaRef.current.reset();
            } else {
                setStatus({ loading: false, message: data.message || 'Something went wrong. Please try again.', type: 'error' });
            }

            // Clear message after 5 seconds
            setTimeout(() => setStatus({ loading: false, message: '', type: '' }), 5000);

        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ loading: false, message: 'Failed to send message. Please check your connection.', type: 'error' });
            setTimeout(() => setStatus({ loading: false, message: '', type: '' }), 5000);
        }
    };

    return (
        <main className="contact-page">
            <PageBanner
                title={t('contact.banner.title')}
                subtitle={t('contact.banner.subtitle')}
                label={t('contact.banner.label')}
                bgImage="/positioningBg.webp"
            />

            <section className="support-intro section-padding">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">
                            <span className="label-icon"><FaGlobe /></span>
                            {t('contact.intro.label')}
                        </div>
                        <h2>{t('contact.intro.title')}</h2>
                        <p>
                            {t('contact.intro.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main section-padding">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-item">
                                <div className="icon-box">
                                    <FiMapPin />
                                </div>
                                <div className="content">
                                    {/* <h3>{t('contact.info.location.title')}</h3> */}
                                    {/* {t('contact.info.location.address')} */}
                                    <h4>{t('contact.info.location.legalEntityName')}</h4>
                                    <p>Connective India</p>
                                    <h4>{t('contact.info.location.registeredAddress')}</h4>
                                    <p>Jewel Planet Apartment, <br />
                                        Building No.1104, Flat No. 5 F, <br />
                                        Kochi, Kerala, 682019</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <FiMail />
                                </div>
                                <div className="content">
                                    <h3>{t('contact.info.email.title')}</h3>
                                    <p><a href="mailto:ceo@connectiveindia.in">ceo@connectiveindia.in</a></p>
                                    <p><a href="mailto:theconnectiveindia@gmail.com">theconnectiveindia@gmail.com</a></p>
                                    <p><a href="mailto:cu@connectiveindia.in">cu@connectiveindia.in</a></p>
                                </div>
                            </div>

                            {/* <div className="info-item">
                                <div className="icon-box">
                                    <FiPhone />
                                </div>
                                <div className="content">
                                    <h3>Call Us</h3>
                                    <p><a href="tel:+914012345678">+91 40 1234 5678</a></p>
                                    <p><a href="tel:+914087654321">+91 40 8765 4321</a></p>
                                </div>
                            </div> */}

                            <div className="social-links">
                                <a href="https://www.youtube.com/@connectiveindia" className="social-icon" target="_blank" rel="noopener noreferrer"><AiOutlineYoutube /></a>
                                <a href="https://www.facebook.com/connectiveindia" className="social-icon" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
                                {/* <a href="#" className="social-icon"><FiLinkedin /></a> */}
                                <a href="https://www.instagram.com/theconnectiveindia/" className="social-icon" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">{t('contact.form.name')}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder={t('contact.form.name')}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={errors.name ? 'input-error' : ''}
                                        />
                                        {errors.name && <span className="error-text">{errors.name}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">{t('contact.form.email')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder={t('contact.form.email')}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={errors.email ? 'input-error' : ''}
                                        />
                                        {errors.email && <span className="error-text">{errors.email}</span>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">{t('contact.form.subject')}</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder={t('contact.form.subject')}
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={errors.subject ? 'input-error' : ''}
                                    />
                                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">{t('contact.form.message')}</label>
                                    <textarea
                                        id="message"
                                        placeholder={t('contact.form.message')}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className={errors.message ? 'input-error' : ''}
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <div className="recaptcha-wrapper">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "YOUR_SITE_KEY_HERE"}
                                    />
                                </div>

                                {status.message && (
                                    <div className={`form-status ${status.type}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn-submit"
                                    disabled={status.loading}
                                >
                                    {status.loading ? t('contact.form.submitting') : t('contact.form.submit')}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
};

export default ContactPage;
