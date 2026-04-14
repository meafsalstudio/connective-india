"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaExclamationTriangle, FaChartPie, FaLock, FaMoneyBillWave, FaBullseye, FaCheckCircle, FaStar } from 'react-icons/fa';
import '../styles/components/ProblemsAddressed.scss';
const problemsImage = "/problems-addressed.png";

const ProblemsAddressed = () => {
    const { t } = useLanguage();
    const problems = [
        {
            icon: <FaExclamationTriangle />,
            title: t('problems.indiaHas.title'),
            description: t('problems.indiaHas.lines')
        },
        {
            icon: <FaChartPie />,
            title: t('problems.peopleStruggle.title'),
            description: t('problems.peopleStruggle.lines')
        },
    ];
        // {
        //     icon: <FaLock />,
        //     title: "Lack of Accountability",
        //     description: "No clear mechanism for tracking, verification, & legal recourse in service delivery."
        // },
        // {
        //     icon: <FaMoneyBillWave />,
        //     title: "Hidden Costs",
        //     description: "Unclear pricing causes unexpected costs due to lack of standard rules."
        // }

    return (
        <section className="problems-addressed-section">
            <div className="section-container">
                {/* Header - Top Center */}
                <div className="content-header centered-header">
                    <span className="section-label">
                        <span className="label-icon"><FaBullseye /></span>
                        {t('problems.label')}
                    </span>
                    <h2>{t('problems.title')}</h2>
                    <p className="subtitle">{t('problems.subtitle')}</p>
                </div>

                <div className="split-layout">
                    {/* Left Column - Image & Overlay */}
                    <div className="image-column">
                        <div className="image-wrapper">
                            <img src={problemsImage} alt="Community Connection" />

                            {/* Overlay Card */}
                            <div className="overlay-card">
                                <div className="card-header">
                                    <div className="icon-box">
                                        <FaCheckCircle />
                                    </div>
                                </div>
                                <h3>{t('problems.trustSafety.title')}</h3>
                                <p>{t('problems.trustSafety.desc')}</p>
                                <div className="stats-row">
                                    <div className="stat">
                                        <span className="value">100%</span>
                                        <span className="label">{t('problems.trustSafety.verified')}</span>
                                    </div>
                                    <div className="stat">
                                        <span className="value">24/7</span>
                                        <span className="label">{t('problems.trustSafety.support')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content Grid */}
                    <div className="content-column">
                        <div className="problems-grid">
                            {problems.map((problem, index) => (
                                <div key={index} className="problem-card">
                                    <div className="icon-wrapper">{problem.icon}</div>
                                    <h3>{problem.title}</h3>
                                    <div className="description">
                                        {Array.isArray(problem.description) ? (
                                            <ul>
                                                {problem.description.map((line, i) => (
                                                    <li key={i}>{line}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{problem.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemsAddressed;
