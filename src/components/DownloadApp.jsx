"use client";
import React from 'react';
import { FaApple, FaGooglePlay, FaMobileAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/DownloadApp.scss';

const DownloadApp = () => {
    const { t } = useLanguage();
    return (
        <section className="download-app-section">
            <div className="section-container">
                <div className="content-wrapper">
                    <div className="left-side">
                        <span className="section-label">
                            <span className="label-icon"><FaMobileAlt /></span>
                            {t('downloadApp.label')}
                        </span>
                        <h2>{t('downloadApp.title')}</h2>
                        <p className="description">
                            {t('downloadApp.description')}
                        </p>

                        <div className="download-buttons">
                            <a href="#" className="download-btn apple">
                                <FaApple className="btn-icon" />
                                <div className="btn-text">
                                    <span>{t('hero.downloadOn')}</span>
                                    <strong>{t('hero.appStore')}</strong>
                                </div>
                            </a>
                            <a href="#" className="download-btn google">
                                <FaGooglePlay className="btn-icon" />
                                <div className="btn-text">
                                    <span>{t('hero.getItOn')}</span>
                                    <strong>{t('hero.googlePlay')}</strong>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="phone-mockup">
                            <div className="phone-bezel">
                                <div className="phone-screen">
                                    <img src="/poster/img4.webp" alt="App Interface 1" className="mockup-img" />
                                </div>
                                <div className="phone-notch"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
