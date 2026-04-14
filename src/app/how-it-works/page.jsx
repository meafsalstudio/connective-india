"use client";
import React from 'react';
import { FaCogs, FaUserCheck, FaEye, FaStar, FaShieldAlt, FaHandshake, FaCheck } from 'react-icons/fa';
import '../../styles/pages/HowItWorks.scss';
import PageBanner from '../../components/PageBanner';
import { useLanguage } from '../../context/LanguageContext';

export default function HowItWorks() {
    const { t } = useLanguage();
    
    const steps = [
        {
            number: "01",
            title: t('howItWorks.steps.step1.title'),
            description: t('howItWorks.steps.step1.desc'),
            illustration: "/how-work/user-register.webp",
            features: t('howItWorks.steps.step1.features', { returnObjects: true }) || []
        },
        {
            number: "02",
            title: t('howItWorks.steps.step2.title'),
            description: t('howItWorks.steps.step2.desc'),
            illustration: "/how-work/submit-service-requests.webp",
            features: t('howItWorks.steps.step2.features', { returnObjects: true }) || []
        },
        {
            number: "03",
            title: t('howItWorks.steps.step3.title'),
            description: t('howItWorks.steps.step3.desc'),
            illustration: "/how-work/service-provider-assigned.webp",
            features: t('howItWorks.steps.step3.features', { returnObjects: true }) || []
        },
        {
            number: "04",
            title: t('howItWorks.steps.step4.title'),
            description: t('howItWorks.steps.step4.desc'),
            illustration: "/how-work/service-at-doorstep.webp",
            features: t('howItWorks.steps.step4.features', { returnObjects: true }) || []
        },
    ];

    return (
        <div className="how-it-works-page">
            <PageBanner 
                title={t('howItWorks.banner.title')}
                subtitle={t('howItWorks.banner.subtitle')}
                label={t('howItWorks.banner.label')}
                bgImage="/aboutBg3.webp"
            />

            {/* Intro Section */}
            <section className="how-intro-section section-padding-small">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">
                            <span className="label-icon"><FaCogs /></span>
                            {t('howItWorks.intro.label')}
                        </span>
                        <h2>{t('howItWorks.intro.title')}</h2>
                        <p className="description">
                            {t('howItWorks.intro.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="process-section section-padding">
                <div className="container">
                    <div className="process-steps">
                        {steps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-meta">
                                    <div className="step-icon-box">
                                        <div className="icon-wrapper">
                                            <img src={step.illustration} alt={step.title} />
                                        </div>
                                    </div>
                                </div>
                                <div className="step-body">
                                    <div className="step-number-badge">{step.number}</div>
                                    <h3>{step.title}</h3>
                                    <div className="step-content">
                                        <p>{step.description}</p>
                                        <div className="step-features">
                                            {step.features.map((feature, idx) => (
                                                <div key={idx} className="feature-row">
                                                    <div className="icon-circle"><FaCheck /></div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
