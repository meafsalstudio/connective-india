"use client";
import React from 'react';
import { FaGlobe, FaStar } from "react-icons/fa";
import '../../styles/pages/WhatWeDo.scss';
import PageBanner from '../../components/PageBanner';
import { useLanguage } from '../../context/LanguageContext';

export default function WhatWeDo() {
    const { t } = useLanguage();

    return (
        <div className="what-we-do-page">
            <PageBanner
                title={t('whatWeDo.banner.title')}
                subtitle={t('whatWeDo.banner.subtitle')}
                label={t('whatWeDo.banner.label')}
                bgImage="/aboutBg4.webp"
            />

            <section className="service-intro section-padding">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label">
                            <span className="label-icon"><FaGlobe /></span>
                            {t('whatWeDo.intro.label')}
                        </div>
                        <h2>{t('whatWeDo.intro.title')}</h2>
                        <p>
                            {t('whatWeDo.intro.description')}
                        </p>

                    </div>
                </div>
            </section>

            {/* Services Rows */}
            <div className="services-wrapper">
                <section id='service-providers' className="service-section section-padding highlighted">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/sp2.webp" alt="Service Providers" />
                                <div className="highlight-tag">{t('whatWeDo.sections.providers.tag')}</div>
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.providers.title')}</h3>
                            <p>{t('whatWeDo.sections.providers.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <p>{t('whatWeDo.sections.providers.subDesc')}</p>
                                    <div className="points">
                                        {(t('whatWeDo.sections.providers.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                                {/* <li>
                                    <h4>2 - Premium Service Providers (Privileged Category)</h4>
                                    <p>Connective India Privilege Service Providers Enjoy the Same Powerful Platform Access with Exclusive Membership Benefits Through Our Partner Networks</p>
                                    <div className="points">
                                        <div className="point">
                                            <span className="point-icon"><FaStar /></span>
                                            <span className="point-text">District Level Premium Service Providers</span>
                                        </div>
                                        <div className="point">
                                            <span className="point-icon"><FaStar /></span>
                                            <span className="point-text">State Level Premium Service Providers</span>
                                        </div>
                                        <div className="point">
                                            <span className="point-icon"><FaStar /></span>
                                            <span className="point-text">Pan India level Premium Service Providers</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <h4>3 - CI Assisted Service Providers</h4>
                                    <p>Connective India Assisted Service Providers, Who Require Direct Human Involvement from Any Panchayat / Taluk / District / State Coordinators for Onboarding, Verification, Institutional Access, Approvals, Expansion, or Complex Service Facilitation at Door Steps</p>
                                </li> */}
                            </ul>
                            <div className="benefits-section">
                                <div className="benefits-header">
                                    <div className="icon-circle"><FaGlobe /></div>
                                    <h4>{t('whatWeDo.sections.providers.benefitsTitle')}</h4>
                                </div>
                                <div className="benefits-grid">
                                    {(t('whatWeDo.sections.providers.benefits', { returnObjects: true }) || []).map((benefit, i) => (
                                        <div key={i} className="benefit-item">
                                            <div className="benefit-icon"></div>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="service-seekers" className="service-section section-padding highlighted">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/what-we-do/service-seekers.webp" alt="Service Seekers" />
                                <div className="highlight-tag">{t('whatWeDo.sections.seekers.tag')}</div>
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.seekers.title')}</h3>
                            <p>{t('whatWeDo.sections.seekers.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <p>{t('whatWeDo.sections.seekers.subDesc')}</p>
                                    <div className="points">
                                        {(t('whatWeDo.sections.seekers.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                                {/* <li>
                                    <h4>2 - Premium Service Seekers (Privileged Category)</h4>
                                    <p>Designed for Institution-Connected Members. This Category Offers Priority Enrolment and Value-Based Access to Services — Any Time, Anywhere.</p>
                                    <div className="points">
                                        <div className="point">
                                            <span className="point-icon"><FaStar /></span>
                                            <span className="point-text">District Level Premium Service Seekers</span>
                                        </div>
                                        <div className="point">
                                            <span className="point-icon"><FaStar /></span>
                                            <span className="point-text">State Level Premium Service Seekers</span>
                                        </div>
                                        <div className="point">
                                            <span className="point-icon"><FaStar /></span>
                                            <span className="point-text">Pan India level Premium Service Seekers</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <h4>3 - CI Assisted Service Seekers</h4>
                                    <p>Connective India Assisted Service Seekers Are Members Who Require Personal Involvement of Panchayat / Taluk / District / State Coordinators to Facilitate Complex Services at Their Door Step</p>
                                </li> */}
                            </ul>
                            <div className="benefits-section secondary">
                                <div className="benefits-header">
                                    <div className="icon-circle"><FaGlobe /></div>
                                    <h4>{t('whatWeDo.sections.seekers.benefitsTitle')}</h4>
                                </div>
                                <div className="benefits-grid">
                                    {(t('whatWeDo.sections.seekers.benefits', { returnObjects: true }) || []).map((benefit, i) => (
                                        <div key={i} className="benefit-item">
                                            <div className="benefit-icon"></div>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="assisted-services" className="service-section section-padding highlighted">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/what-we-do/assisted-services.webp" alt="Assisted Services" />
                                <div className="highlight-tag">{t('whatWeDo.sections.assistedServices.tag')}</div>
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.assistedServices.title')}</h3>
                            <p>{t('whatWeDo.sections.assistedServices.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <p>{t('whatWeDo.sections.assistedServices.subDesc')}</p>
                                    <div className="points">
                                        {(t('whatWeDo.sections.assistedServices.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                            <div className="benefits-section">
                                <div className="benefits-header">
                                    <div className="icon-circle"><FaGlobe /></div>
                                    <h4>{t('whatWeDo.sections.assistedServices.benefitsTitle')}</h4>
                                </div>
                                <div className="benefits-grid">
                                    {(t('whatWeDo.sections.assistedServices.benefits', { returnObjects: true }) || []).map((benefit, i) => (
                                        <div key={i} className="benefit-item">
                                            <div className="benefit-icon"></div>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="service-combo" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/what-we-do/service-combo.webp" alt="Service Combo" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.combo.title')}</h3>
                            <p>{t('whatWeDo.sections.combo.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.combo.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="jobs" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/what-we-do/jobs.webp" alt="Jobs" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.jobs.title')}</h3>
                            <p>{t('whatWeDo.sections.jobs.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.jobs.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="matrimony" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/what-we-do/matrimony.webp" alt="Matrimony" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.matrimony.title')}</h3>
                            <p>{t('whatWeDo.sections.matrimony.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.matrimony.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="buy-sell" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/what-we-do/buy-sell-img.webp" alt="Buy & Sell" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.buySell.title')}</h3>
                            <p>{t('whatWeDo.sections.buySell.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.buySell.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="admissions" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/img2.webp" alt="Admissions" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.admissions.title')}</h3>
                            <p>{t('whatWeDo.sections.admissions.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.admissions.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="personal-care" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/care1.webp" alt="Personal Care" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.personalCare.title')}</h3>
                            <p>{t('whatWeDo.sections.personalCare.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.personalCare.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="events" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/event1.webp" alt="Events" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.events.title')}</h3>
                            <p>{t('whatWeDo.sections.events.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.events.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="health-care" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/health1.webp" alt="Health Care" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.healthCare.title')}</h3>
                            <p>{t('whatWeDo.sections.healthCare.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.healthCare.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="rent" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/rent1.webp" alt="Rent" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.rent.title')}</h3>
                            <p>{t('whatWeDo.sections.rent.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.rent.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="fresh-care-campus" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/campus11.webp" alt="Fresh Care Campus" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.freshCareCampus.title')}</h3>
                            <p>{t('whatWeDo.sections.freshCareCampus.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.freshCareCampus.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="loans" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/loan11.webp" alt="Loans" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.loans.title')}</h3>
                            <p>{t('whatWeDo.sections.loans.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.loans.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="life-care-plans" className="service-section section-padding">
                    <div className="service-row">
                        <div className="image-column">
                            <div className="image-wrapper">
                                <img src="/lifeplans11.webp" alt="Life Care Plans" />
                            </div>
                        </div>
                        <div className="content-column">
                            <h3>{t('whatWeDo.sections.lifeCarePlans.title')}</h3>
                            <p>{t('whatWeDo.sections.lifeCarePlans.desc')}</p>
                            <ul className="service-subtypes">
                                <li>
                                    <div className="points" style={{ marginTop: '0' }}>
                                        {(t('whatWeDo.sections.lifeCarePlans.levels', { returnObjects: true }) || []).map((level, i) => (
                                            <div key={i} className="point">
                                                <span className="point-icon"><FaStar /></span>
                                                <span className="point-text">{level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
