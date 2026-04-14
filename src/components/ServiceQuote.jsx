"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/ServiceQuote.scss';

const mockup1 = "/poster/img2.webp";
const mockup2 = "/poster/img1.webp";
const mockup3 = "/poster/img3.webp";

const ServiceQuote = () => {
    const { t } = useLanguage();
    const quoteLines = [
        t('serviceQuote.line1'),
        t('serviceQuote.line2'),
        t('serviceQuote.line3')
    ];

    return (
        <div style={{ width: '100%', position: 'relative' }}>
            <section className="service-quote-section">
                <div className="container">
                    <div className="quote-content-wrapper">
                        <div className="mockup-side">
                            <div className="phone-mockup">
                                <div className="phone-bezel">
                                    <div className="phone-screen">
                                        <img src={mockup1} alt="App Interface 1" className="mockup-img active" />
                                        <img src={mockup2} alt="App Interface 2" className="mockup-img" />
                                        <img src={mockup3} alt="App Interface 3" className="mockup-img" />
                                    </div>
                                    <div className="phone-notch"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-side">
                            <p className="quote-text">
                                {quoteLines.map((line, lineIndex) => (
                                    <React.Fragment key={lineIndex}>
                                        {line.split(' ').map((word, wordIndex) => (
                                            <span key={`${lineIndex}-${wordIndex}`} className={`word ${word.includes('Connective') || word.includes('India') ? 'highlight' : ''}`}>
                                                {word}{' '}
                                            </span>
                                        ))}
                                        {lineIndex < quoteLines.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                            <div className="textBox">
                                <p  > {t('serviceQuote.deliver')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceQuote;
