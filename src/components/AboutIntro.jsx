"use client";
import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/AboutIntro.scss';

const AboutIntro = () => {
    const { t } = useLanguage();
    return (
        <section className="about-intro">
            <div className="container">
                <div className="intro-content">
                    <span className="section-label">
                        <span className="label-icon"><FaRocket /></span>
                        {t('about.intro.label')}
                    </span>
                    <h1>{t('about.intro.title')}</h1>
                    <div className="description">
                        {t('about.intro.description')}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
