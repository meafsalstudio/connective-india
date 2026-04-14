"use client";
import '../styles/components/homeService.scss';
import { useLanguage } from '../context/LanguageContext';
import { FaMobileAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const HomeService = () => {
    const { t } = useLanguage();

    return (
        <section className="homeService">
            <div className="container">
                <div className="homeServiceHead">
                    <span className="section-label">
                        <span className="label-icon"><FiArrowRight /></span>
                        {t('homeService.label')}
                    </span>
                    <h2>{t('homeService.title')}</h2>
                    <p className="description">
                        {t('homeService.description')}
                    </p>
                </div>
                <div className="homeServiceMain">
                    <div className="homeServiceCol">
                        <Link href="/what-we-do#service-providers" className="homeServiceItem box1">
                            <div className="homeServiceItemThumbnail">
                                <img src="/sp1.webp" alt="" />
                            </div>
                            <div className="homeServiceItemDetails">
                                <h3>{t('homeService.providers.title')}</h3>
                                <p>{t('homeService.providers.desc')}</p>
                                <div className="card-btn-wrapper">
                                    <span className="card-vibrating-btn">
                                        {t('homeService.viewMore')}
                                        <span className="arrow-icon"><FiArrowRight /></span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link href="/what-we-do#service-seekers" className="homeServiceItem box2">
                            <div className="homeServiceItemThumbnail">
                                <img src="/what-we-do/service-seekers.webp" alt="" />
                            </div>
                            <div className="homeServiceItemDetails">
                                <h3>{t('homeService.seekers.title')}</h3>
                                <p>{t('homeService.seekers.desc')}</p>
                                <div className="card-btn-wrapper">
                                    <span className="card-vibrating-btn">
                                        {t('homeService.viewMore')}
                                        <span className="arrow-icon"><FiArrowRight /></span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="homeServiceCol">
                        {/* <div className="homeServiceItem box2">
                            <div className="homeServiceItemThumbnail">
                                <img src="/what-we-do/job-seeker.webp" alt="" />
                            </div>
                            <div className="homeServiceItemDetails">
                                <h3>Jobs Seekers</h3>
                                <p>Explore career opportunities & trusted hiring.</p>
                            </div>
                        </div>
                        <div className="homeServiceItem box1">
                            <div className="homeServiceItemThumbnail">
                                <img src="/what-we-do/job-provider.webp" alt="" />
                            </div>
                            <div className="homeServiceItemDetails">
                                <h3>Jobs Providers</h3>
                                <p>Connecting skilled professionals with opportunities</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeService;
