"use client";
import React from 'react';
import { FaShieldAlt, FaChartLine, FaWallet, FaAward, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/SolutionPillars.scss';

const trustImage = "/pillar1.webp";
const growthImage = "/pillar2.webp";
const incomeImage = "/pillar3.webp";
const recognitionImage = "/pillar4.webp";

const SolutionPillars = () => {
    const { t } = useLanguage();
    const pillars = [
        {
            title: t('solutionPillars.trust.title'),
            description: t('solutionPillars.trust.desc'),
            icon: <FaShieldAlt />,
            price: "100%",
            priceLabel: t('solutionPillars.trust.label'),
            gradientClass: "gradient-trust",
            image: trustImage
        },
        {
            title: t('solutionPillars.growth.title'),
            description: t('solutionPillars.growth.desc'),
            icon: <FaChartLine />,
            price: "3x",
            priceLabel: t('solutionPillars.growth.label'),
            gradientClass: "gradient-growth",
            image: growthImage
        },
        {
            title: t('solutionPillars.income.title'),
            description: t('solutionPillars.income.desc'),
            icon: <FaWallet />,
            price: "2x",
            priceLabel: t('solutionPillars.income.label'),
            gradientClass: "gradient-income",
            image: incomeImage
        },
        {
            title: t('solutionPillars.recognition.title'),
            description: t('solutionPillars.recognition.desc'),
            icon: <FaAward />,
            price: "Top",
            priceLabel: t('solutionPillars.recognition.label'),
            gradientClass: "gradient-recognition",
            image: recognitionImage
        }
    ];

    return (
        <section className="solution-pillars-section">
            <div className="container">
                <div className="header-content">
                    <span className="section-label">
                        <span className="label-icon"><FaLightbulb /></span>
                        {t('solutionPillars.label')}
                    </span>
                    <h2>{t('solutionPillars.title')}</h2>
                    <p className="subtitle">{t('solutionPillars.subtitle')}</p>
                </div>

                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <div className="pillar-column" key={index}>
                            <div
                                className={`pillar-card ${pillar.gradientClass}`}
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${pillar.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="card-content">
                                    <div className="big-value">{pillar.price}</div>
                                    <div className="floating-pill">
                                        <span className="pill-icon">{pillar.icon}</span>
                                        <span className="pill-text">{pillar.priceLabel}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pillar-info">
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionPillars;
