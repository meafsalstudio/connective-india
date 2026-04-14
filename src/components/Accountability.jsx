"use client";
import React from 'react';
import { FaShieldAlt, FaUser, FaFileAlt, FaMedal, FaCheck, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/Accountability.scss';
const teamImage = "/problems-addressed.png";
import { TbEyeCheck, TbEyeX } from "react-icons/tb";

const Accountability = () => {
    const { t } = useLanguage();
    return (
        <section className="accountability-section">
            <div className="section-container">
                {/* Left Column: Content & Features */}
                <div className="left-content">
                    <div className="section-header">
                        <span className="section-label">
                            <span className="label-icon"><FaShieldAlt /></span>
                            {t('accountability.label')}
                        </span>
                        <h2>{t('accountability.title')}</h2>
                        <p className="description">
                            {t('accountability.description')}
                        </p>
                    </div>

                    <div className="features-list">
                        <div className="feature-item">
                            <div className="icon-circle" style={{ backgroundColor: '#50db82' }}><FaUser /></div>
                            <div className="text-content">
                                <h4>{t('accountability.features.identity.title')}</h4>
                                <p>{t('accountability.features.identity.desc')}</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="icon-circle" style={{ backgroundColor: '#f7d85dff' }}><FaFileAlt /></div>
                            <div className="text-content">
                                <h4>{t('accountability.features.document.title')}</h4>
                                <p>{t('accountability.features.document.desc')}</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="icon-circle" style={{ backgroundColor: '#ff8e6b' }}><FaShieldAlt /></div>
                            <div className="text-content">
                                <h4>{t('accountability.features.background.title')}</h4>
                                <p>{t('accountability.features.background.desc')}</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="icon-circle" style={{ backgroundColor: '#6bbaffff' }}><FaMedal /></div>
                            <div className="text-content">
                                <h4>{t('accountability.features.badge.title')}</h4>
                                <p>{t('accountability.features.badge.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Verified Card Visualization */}
                <div className="right-content">
                    <div className="verified-card" style={{ backgroundImage: `url(${teamImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="card-top">
                            <div className="main-check-icon">
                                <TbEyeCheck />
                            </div>
                            <div className="content">
                                <h3>{t('accountability.verifiedProvider')}</h3>
                                <span className="trust-score">{t('accountability.trustScoreExcellent')}</span>
                            </div>
                        </div>
                        <div className="card-top">
                            <div className="main-check-icon">
                                <TbEyeX />
                            </div>
                            <div className="content">
                                <h3>{t('accountability.unverifiedProvider')}</h3>
                                <span className="trust-score">{t('accountability.trustScoreNotVerified')}</span>
                            </div>
                        </div>
                        <div className="verification-steps">
                            <div className="step-item">
                                <div className="step-check"><FaCheckCircle /></div>
                                <span>{t('accountability.steps.identity')}</span>
                            </div>
                            <div className="step-item">
                                <div className="step-check"><FaCheckCircle /></div>
                                <span>{t('accountability.steps.documents')}</span>
                            </div>
                            <div className="step-item">
                                <div className="step-check"><FaCheckCircle /></div>
                                <span>{t('accountability.steps.background')}</span>
                            </div>
                            <div className="step-item">
                                <div className="step-check"><FaCheckCircle /></div>
                                <span>{t('accountability.steps.badge')}</span>
                            </div>
                        </div>

                        <p className="card-footer">{t('accountability.badgeExample')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accountability;
