"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/Legal.scss';
import { useLanguage } from '../../context/LanguageContext';

const PrivacyPage = () => {
    const { t } = useLanguage();

    return (
        <div className="privacy-page legal-page">
            <PageBanner
                title={t('privacyPolicy.banner.title')}
                subtitle={t('privacyPolicy.banner.subtitle')}
                label={t('privacyPolicy.banner.label')}
                bgImage="/principles.webp"
            />

            <section className="legal-content">
                <div className="container">
                    <span className="last-updated">{t('privacyPolicy.lastUpdated')}</span>

                    <div className="content-block">
                        <h3>{t('privacyPolicy.section1')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('privacyPolicy.section2')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('privacyPolicy.section3')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('privacyPolicy.section4')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('privacyPolicy.section5')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('privacyPolicy.section6')}</h3>
                        <a href="mailto:cu@connectiveindia.in">cu@connectiveindia.in</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
