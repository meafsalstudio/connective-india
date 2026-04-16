"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/Legal.scss';
import { useLanguage } from '../../context/LanguageContext';

const RefundCancellationPolicyPage = () => {
    const { t } = useLanguage();

    return (
        <div className="privacy-page legal-page">
            <PageBanner
                title={t('refundPolicy.banner.title')}
                subtitle={t('refundPolicy.banner.subtitle')}
                label={t('refundPolicy.banner.label')}
                bgImage="/principles.webp"
            />

            <section className="legal-content">
                <div className="container">
                    <span className="last-updated">{t('refundPolicy.lastUpdated')}</span>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section1.title')}</h3>
                        <p>{t('refundPolicy.section1.p1')}</p>
                        <p>{t('refundPolicy.section1.p2')}</p>
                    </div>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section2.title')}</h3>
                        <ul>
                            <li>{t('refundPolicy.section2.l1')}</li>
                            <li>{t('refundPolicy.section2.l2')}</li>
                            <li>{t('refundPolicy.section2.l3')}</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section3.title')}</h3>
                        <ul>
                            <li>{t('refundPolicy.section3.l1')}</li>
                            <li>{t('refundPolicy.section3.l2')}</li>
                            <li>{t('refundPolicy.section3.l3')}</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section4.title')}</h3>
                        <ul>
                            <li>{t('refundPolicy.section4.l1')}</li>
                            <li>{t('refundPolicy.section4.l2')}</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section5.title')}</h3>
                        <ul>
                            <li>{t('refundPolicy.section5.l1')}</li>
                            <li>{t('refundPolicy.section5.l2')}</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section6.title')}</h3>
                        <ul>
                            <li>{t('refundPolicy.section6.l1')}</li>
                            <li>{t('refundPolicy.section6.l2')}</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section7.title')}</h3>
                        <ul>
                            <li>{t('refundPolicy.section7.l1')}</li>
                            <li>{t('refundPolicy.section7.l2')}</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>{t('refundPolicy.section8.title')}</h3>
                        <p>{t('refundPolicy.section8.p1')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundCancellationPolicyPage;
