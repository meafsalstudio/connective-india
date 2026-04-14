"use client";
import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/pages/Careers.scss';
import CoordinatorApplicationForm from '../../components/CoordinatorApplicationForm';
import PageBanner from '../../components/PageBanner';

const CareersPage = () => {
    const { t } = useLanguage();

    return (
        <div className="careers-page">
            <PageBanner 
                title={t('careers.banner.title')}
                subtitle={t('careers.banner.subtitle')}
                label={t('careers.banner.label')}
                bgImage="/principles.webp"
            />

            <section className="career-intro section-padding">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">
                            <span className="label-icon"><FaRocket /></span>
                            {t('careers.intro.label')}
                        </div>
                        <h2>{t('careers.intro.title')}</h2>
                        <p>{t('careers.intro.description')}</p>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="coordinator-section">
                <div className="container">
                    <CoordinatorApplicationForm />
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
