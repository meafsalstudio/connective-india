"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import { useLanguage } from '../context/LanguageContext';
import 'aos/dist/aos.css';
import '../styles/components/Tagline.scss';

const Tagline = () => {
    const { t } = useLanguage();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

    return (
        <div className="tagline">
            <div className="container">
                <div className="taglineMain">
                    <div className="taglineDetails">
                        <div className="tagline-text">
                            <h2 data-aos="fade-up" data-aos-delay="100">{t('tagline.anything')}</h2>
                            <h2 data-aos="fade-up" data-aos-delay="200">{t('tagline.anywhere')}</h2>
                            <h2 data-aos="fade-up" data-aos-delay="300">{t('tagline.anytime')}</h2>
                            <h2 data-aos="fade-up" data-aos-delay="400">{t('tagline.anyone')}.......</h2>
                        </div>
                    </div>
                    <div className="taglineLogo" data-aos="fade-right">
                        <img src="/logoFinal11.webp" alt="Connective India" />
                    </div>
                </div>
                <h3 data-aos="zoom-in" data-aos-delay="600">{t('tagline.doorstep')}</h3>
            </div>
        </div>
    );
};

export default Tagline;
