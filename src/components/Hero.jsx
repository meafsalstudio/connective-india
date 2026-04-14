"use client";
import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaChartLine, FaUserFriends, FaMedal, FaArrowRight, FaApple, FaGooglePlay } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/Hero.scss';
import { PiCertificateDuotone } from "react-icons/pi";

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="hero-section">
            <div className='certification'>
                <div className="certificationList">
                    <span><PiCertificateDuotone /> ISO 9001:2015</span>
                    <span><PiCertificateDuotone /> ISO/IEC 27001:2022</span>
                    <span><PiCertificateDuotone /> ISO27701:2019</span>
                    <span><PiCertificateDuotone /> ISO 22301: 2019</span>
                </div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    {/* <span className="pill">National Governance Framework</span> */}
                    <h1>{t('hero.title')}<sup>TM</sup></h1>
                    <h2>{t('hero.subtitle')} <span className="highlight">{t('hero.subtitleHighlight')}</span></h2>
                    <p>{t('hero.description')} <br />{t('hero.panchayatToNation')} <br />{t('hero.connectingIndia')}</p>
                    {/* <div className="hero-actions">
                        <Link href="/register" className="btn btn-primary">
                            Get Started <FaArrowRight />
                        </Link>å
                        <Link href="/explore" className="btn btn-outline">
                            Explore Categories
                        </Link>
                    </div> */}

                    <div className="hero-app-links">
                        <a href="#" className="app-btn apple">
                            <FaApple className="icon" />
                            <div className="btn-text">
                                <span className="small">{t('hero.downloadOn')}</span>
                                <span className="big">{t('hero.appStore')}</span>
                            </div>
                        </a>
                        <a href="#" className="app-btn google">
                            <FaGooglePlay className="icon" />
                            <div className="btn-text">
                                <span className="small">{t('hero.getItOn')}</span>
                                <span className="big">{t('hero.googlePlay')}</span>
                            </div>
                        </a>
                    </div>
                    <div className="trust-metrics">
                        <div className="metric-item">
                            <FaShieldAlt className="icon" /> {t('hero.trust')}
                        </div>
                        <div className="metric-item">
                            <FaChartLine className="icon" /> {t('hero.growth')}
                        </div>
                        <div className="metric-item">
                            <FaUserFriends className="icon" /> {t('hero.income')}
                        </div>
                        <div className="metric-item">
                            <FaMedal className="icon" /> {t('hero.recognition')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
