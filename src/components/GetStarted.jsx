"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaUserPlus, FaUserCheck, FaRocket, FaMapSigns, FaApple, FaGooglePlay } from 'react-icons/fa';
import '../styles/components/GetStarted.scss';

const GetStarted = () => {
    const { t } = useLanguage();
    return (
        <section className="get-started-section">
            <div className="container">
                <span className="section-label">
                    <span className="label-icon"><FaMapSigns /></span>
                    {t('getStarted.label')}
                </span>
                <h2>{t('getStarted.title')}</h2>
                <p className="subtitle">{t('getStarted.subtitle')}</p>

                <div className="steps-container">
                    <div className="steps-containerHead">
                        <div className="step-card">
                            <div className="step-number">01</div>
                            <div className="icon-circle">
                                <FaUserPlus />
                            </div>
                            <h4>{t('getStarted.register')}</h4>
                            <p>{t('getStarted.registerDesc')}</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">02</div>
                            <div className="icon-circle">
                                <FaUserCheck />
                            </div>
                            <h4>{t('getStarted.verify')}</h4>
                            <p>{t('getStarted.verifyDesc')}</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">03</div>
                            <div className="icon-circle">
                                <FaRocket />
                            </div>
                            <h4>{t('getStarted.start')}</h4>
                            <p>{t('getStarted.startDesc')}</p>
                        </div>
                    </div>
                    <div className="actions-footer">
                        <a href="#" className="download-btn apple">
                            <FaApple className="btn-icon" />
                            <div className="btn-text">
                                <span>{t('hero.downloadOn')}</span>
                                <strong>{t('hero.appStore')}</strong>
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=in.connectiveindia.connectiveindia" target='_blank' className="download-btn google">
                            <FaGooglePlay className="btn-icon" />
                            <div className="btn-text">
                                <span>{t('hero.getItOn')}</span>
                                <strong>{t('hero.googlePlay')}</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
