"use client";
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/PositioningHighlight.scss';
import Link from 'next/link';
const highlightBg = "/positioningBg.png";

const PositioningHighlight = () => {
    const { t } = useLanguage();
    return (
        <section className="positioning-highlight">
            <div className="container">
                <div className="highlight-wrapper" style={{ backgroundImage: `url(${highlightBg})` }}>
                    <div className="content-card">
                        <h2>{t('positioning.title')}</h2>
                        <p>{t('positioning.desc')}</p>
                        <a href="/contact" className="btn-get-started">
                            {t('positioning.getStarted')} <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PositioningHighlight;
