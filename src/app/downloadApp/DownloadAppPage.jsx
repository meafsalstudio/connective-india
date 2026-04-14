"use client";
import React from 'react';
import { FaApple, FaGooglePlay, FaQrcode } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/pages/DownloadAppPage.scss';

const DownloadAppPage = () => {
    const { t } = useLanguage();
    return (
        <div className="download-app-page">
            <div className="container">
                <div className="download-card">
                    <div className="content-side">
                        <h1>{t('downloadApp.title')}</h1>
                        <p>
                            {t('downloadApp.description')}
                        </p>

                        <div className="store-buttons">
                            <a href="#" className="store-btn apple">
                                <FaApple className="icon" />
                                <div className="text">
                                    <span>{t('hero.downloadOn')}</span>
                                    <strong>{t('hero.appStore')}</strong>
                                </div>
                            </a>
                            <a href="#" className="store-btn google">
                                <FaGooglePlay className="icon" />
                                <div className="text">
                                    <span>{t('hero.getItOn')}</span>
                                    <strong>{t('hero.googlePlay')}</strong>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="qr-side">
                        <div className="qr-box">
                            <FaQrcode className="qr-placeholder" />
                            {/* Ideally replace with an <img> tag when actual QR code is available */}
                            {/* <img src="/qr-code.png" alt="Scan to download" /> */}
                        </div>
                        <span className="scan-text">{t('downloadApp.scanToDownload')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadAppPage;