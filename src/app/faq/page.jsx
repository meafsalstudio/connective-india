"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/FAQ.scss';
import { useLanguage } from '../../context/LanguageContext';

const FAQPage = () => {
    const { t } = useLanguage();
    const faqData = t('faq.items') || [];

    return (
        <div className="faq-page">
            <PageBanner
                title={t('faq.banner.title')}
                subtitle={t('faq.banner.subtitle')}
                label={t('faq.banner.label')}
                bgImage="/principles.webp"
            />

            <section className="faq-content">
                <div className="container">
                    <div className="faq-grid">
                        {Array.isArray(faqData) && faqData.map((item, index) => (
                            <div className="faq-item" key={index}>
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
