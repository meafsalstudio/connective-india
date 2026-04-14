"use client";
import React from 'react';
import { FaBookOpen, FaShieldAlt, FaUsers, FaBalanceScale, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/WhatIsConnectiveIndia.scss';

const WhatIsConnectiveIndia = () => {
    const { t } = useLanguage();
    const features = [
        {
            icon: <FaBookOpen />,
            title: t('whatIsConnectiveIndia.features.rulebook.title'),
            description: t('whatIsConnectiveIndia.features.rulebook.desc')
        },
        {
            icon: <FaShieldAlt />,
            title: t('whatIsConnectiveIndia.features.trust.title'),
            description: t('whatIsConnectiveIndia.features.trust.desc')
        },
        {
            icon: <FaUsers />,
            title: t('whatIsConnectiveIndia.features.facilitation.title'),
            description: t('whatIsConnectiveIndia.features.facilitation.desc')
        },
        {
            icon: <FaBalanceScale />,
            title: t('whatIsConnectiveIndia.features.governance.title'),
            description: t('whatIsConnectiveIndia.features.governance.desc')
        }
    ];

    return (
        <section className="what-is-connective-india-section">
            <div className="section-container">
                <div className="left-content">
                    <span className="section-label">
                        <span className="label-icon"><FaLightbulb /></span>
                        {t('whatIsConnectiveIndia.label')}
                    </span>
                    <h2>{t('whatIsConnectiveIndia.title')}</h2>
                    <p className="description">{t('whatIsConnectiveIndia.description')}</p>
                    <div className="culture-box">
                        <h3>{t('whatIsConnectiveIndia.cultureTitle')}</h3>
                        <p>{t('whatIsConnectiveIndia.cultureDesc')}</p>
                    </div>
                </div>

                <div className="right-content">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIsConnectiveIndia;
