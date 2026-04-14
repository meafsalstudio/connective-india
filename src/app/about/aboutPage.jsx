"use client";
import React, { useEffect } from 'react';
import { FaEye, FaRocket, FaHandshake, FaBalanceScale, FaUsers, FaShieldAlt, FaFlag, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/pages/About.scss';
import AboutCarousel from '../../components/AboutCarousel';
import PageBanner from '../../components/PageBanner';
import AboutIntro from '../../components/AboutIntro';

export default function AboutPage() {
    const { t } = useLanguage();
    useEffect(() => {
        // Ensure scroll to top on mount
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="about-page">
            <PageBanner
                title={t('about.banner.title')}
                subtitle={t('about.banner.subtitle')}
                label={t('about.banner.label')}
                bgImage="/aboutBg2.webp"
            />

            <AboutIntro />

            {/* Image Carousel */}
            <AboutCarousel />
            {/* Vision Section */}

            <section className="vision-section split-content-section">
                <div className="container">
                    <div className="split-grid">
                        <div className="image-column">
                            <div className="main-image-wrapper">
                                <img src="/call1.webp" alt="Our Vision" className="main-img" />
                            </div>
                        </div>
                        <div className="content-column">
                            <span className="section-label">
                                <span className="label-icon"><FaEye /></span>
                                {t('about.vision.label')}
                            </span>
                            <h2>{t('about.vision.title')}</h2>
                            <p className="description">{t('about.vision.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section split-content-section reverse">
                <div className="container">
                    <div className="split-grid">
                        <div className="image-column">
                            <div className="main-image-wrapper">
                                <img src="/call.webp" alt="Our Mission" className="main-img" />
                            </div>
                        </div>
                        <div className="content-column">
                            <span className="section-label">
                                <span className="label-icon"><FaRocket /></span>
                                {t('about.mission.label')}
                            </span>
                            <h2>{t('about.mission.title')}</h2>
                            <p className="description">{t('about.mission.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Connective India Exists Section */}
            <section className="why-exist-section section-padding">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-label">
                            <span className="label-icon"><FaRocket /></span>
                            {t('about.purpose.label')}
                        </span>
                        <h2>{t('about.purpose.title')}</h2>
                        <p className="section-subtitle">{t('about.purpose.subtitle')}</p>
                    </div>

                    <div className="exist-grid">
                        <div className="exist-card">
                            <div className="icon-box green">
                                <FaShieldAlt />
                            </div>
                            <h3>{t('about.purpose.trust.title')}</h3>
                            <p>{t('about.purpose.trust.desc')}</p>
                        </div>
                        <div className="exist-card">
                            <div className="icon-box yellow">
                                <FaFlag />
                            </div>
                            <h3>{t('about.purpose.asymmetry.title')}</h3>
                            <p>{t('about.purpose.asymmetry.desc')}</p>
                        </div>
                        <div className="exist-card">
                            <div className="icon-box orange">
                                <FaUsers />
                            </div>
                            <h3>{t('about.purpose.fragmentation.title')}</h3>
                            <p>{t('about.purpose.fragmentation.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Philosophy Section */}
            <section className="philosophy-section section-padding">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-label">
                            <span className="label-icon"><FaLightbulb /></span>
                            {t('about.philosophy.label')}
                        </span>
                        <h2>{t('about.philosophy.title')}</h2>
                    </div>

                    <div className="philosophy-grid checkerboard">
                        {/* Row 1 */}
                        <div className="block text-block">
                            <div className="block-content">
                                <h4>{t('about.philosophy.governance.title')}</h4>
                                <p>{t('about.philosophy.governance.desc')}</p>
                            </div>
                        </div>
                        <div className="block image-block">
                            <img src="/philosophy/img1.webp" alt="" />
                        </div>
                        <div className="block text-block light">
                            <div className="block-content">
                                <h4>{t('about.philosophy.transparency.title')}</h4>
                                <p>{t('about.philosophy.transparency.desc')}</p>
                            </div>
                        </div>
                        <div className="block image-block">
                            <img src="/philosophy/img2.webp" alt="" />
                        </div>

                        {/* Row 2 */}
                        <div className="block image-block">
                            <img src="/philosophy/img3.webp" alt="" />
                        </div>
                        <div className="block text-block">
                            <div className="block-content">
                                <h4>{t('about.philosophy.opportunity.title')}</h4>
                                <p>{t('about.philosophy.opportunity.desc')}</p>
                            </div>
                        </div>
                        <div className="block image-block">
                            <img src="/philosophy/img4.webp" alt="" />
                        </div>
                        <div className="block text-block light">
                            <div className="block-content">
                                <h4>{t('about.philosophy.trust.title')}</h4>
                                <p>{t('about.philosophy.trust.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cultural Principles (Dark Theme) */}
            {/* <section className="culture-section section-padding">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-label">
                            <span className="label-icon"><FaUsers /></span>
                            Our Culture
                        </span>
                        <h2>Cultural Principles</h2>
                    </div>
                    <div className="grid culture-sectionList">
                        <div className="principles-list">
                            <h3>Our code of conduct defines how we operate as a national entity.</h3>
                            <div className="principle-item">
                                <div className="principle-icon"><FaUsers /></div>
                                <h4>No Elite – Only Culture</h4>
                                <p>We dismantle hierarchies. In our system, the rules are absolute & equal for the newcomer & the veteran alike.</p>
                            </div>
                            <div className="principle-item">
                                <div className="principle-icon"><FaBalanceScale /></div>
                                <h4>Equal Opportunity Framework</h4>
                                <p>Access to opportunities is mediated solely by verification, merit, & ethical compliance to our standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Why We Stand Apart */}
            <section className="governance-section section-padding">
                <div className="container">
                    <div className="governance-sectionMain">
                        <div className="section-header centered">
                            <span className="section-label">
                                <span className="label-icon"><FaShieldAlt /></span>
                                {t('about.difference.label')}
                            </span>
                            <h2>{t('about.difference.title')}</h2>
                            <p style={{ color: '#5f6c7b', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '700px' }}>{t('about.difference.subtitle')}</p>
                        </div>

                        <div className="stands-apart-grid">
                            <div className="apart-item">
                                <div className="image">
                                    <img src="/governance-first-approach.webp" alt="" />
                                </div>
                                <h4>{t('about.difference.governance.title')}</h4>
                                <p>{t('about.difference.governance.desc')}</p>
                            </div>
                            <div className="apart-item">
                                <div className="image">
                                    <img src="/ethics-driven-facilitation.webp" alt="" />
                                </div>
                                <h4>{t('about.difference.ethics.title')}</h4>
                                <p>{t('about.difference.ethics.desc')}</p>
                            </div>
                            <div className="apart-item">
                                <div className="image">
                                    <img src="/national-accountability-model.webp" alt="" />
                                </div>
                                <h4>{t('about.difference.accountability.title')}</h4>
                                <p>{t('about.difference.accountability.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Goal */}
            <section className="experience-goal section-padding">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-label">
                            <span className="label-icon"><FaHandshake /></span>
                            {t('about.promise.label')}
                        </span>
                        <h2>{t('about.promise.title')}</h2>
                    </div>
                    <div className="goal-box">
                        <p>
                            {t('about.promise.quote')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
