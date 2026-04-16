"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/Legal.scss';
import { useLanguage } from '../../context/LanguageContext';

const TermsPage = () => {
    const { t } = useLanguage();

    return (
        <div className="terms-page legal-page">
            <PageBanner
                title={t('termsOfUse.banner.title')}
                subtitle={t('termsOfUse.banner.subtitle')}
                label={t('termsOfUse.banner.label')}
                bgImage="/principles.webp"
            />

            <section className="legal-content">
                <div className="container">
                    <span className="last-updated">{t('termsOfUse.lastUpdated')}</span>

                    <div className="content-block">
                        <h3>{t('termsOfUse.section1')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('termsOfUse.section2')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('termsOfUse.section3.title')}</h3>
                        <p>{t('termsOfUse.section3.desc')}</p>
                        <ul>
                            <li><b>{t('termsOfUse.section3.chargeOptions.oneTimeCharge')}</b> {t('termsOfUse.section3.chargeOptions.oneTimeChargeDesc')}</li>
                            <li><b>{t('termsOfUse.section3.chargeOptions.nonRenewing')}</b> {t('termsOfUse.section3.chargeOptions.nonRenewingDesc')}</li>
                            <li><b>{t('termsOfUse.section3.chargeOptions.payment')}</b> {t('termsOfUse.section3.chargeOptions.paymentDesc')}</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>{t('termsOfUse.section4')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('termsOfUse.section5')}</h3>
                    </div>

                    <div className="content-block">
                        <h3>{t('termsOfUse.section6')}</h3>
                        <a href="mailto:cu@connectiveindia.in">cu@connectiveindia.in</a>
                    </div>
                    <div className="content-block">
                        <h3>{t('termsOfUse.section7')}</h3>
                        <p>{t('termsOfUse.addressDetail')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
