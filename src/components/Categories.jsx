"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { FaUserTie, FaBriefcase, FaHome, FaHeart, FaShoppingCart, FaFileAlt, FaLayerGroup } from 'react-icons/fa';
import { MdHealthAndSafety, MdEvent } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import '../styles/components/Categories.scss';

const Categories = () => {
    const { t } = useLanguage();
    const categories = [
        {
            icon: <FaUserTie />,
            title: t('categories.items.services.title'),
            description: t('categories.items.services.desc'),
            bg: "bg-1",
            link: "/what-we-do#service-providers"
        },
        {
            icon: <FaBriefcase />,
            title: t('categories.items.jobs.title'),
            description: t('categories.items.jobs.desc'),
            bg: "bg-2",
            link: "/what-we-do#jobs"
        },
        {
            icon: <FaHeart />,
            title: t('categories.items.matrimony.title'),
            description: t('categories.items.matrimony.desc'),
            bg: "bg-3",
            link: "/what-we-do#matrimony"
        },
        {
            icon: <FaShoppingCart />,
            title: t('categories.items.buySell.title'),
            description: t('categories.items.buySell.desc'),
            bg: "bg-4",
            link: "/what-we-do#buy-sell"
        },
        {
            icon: <FaFileAlt />,
            title: t('categories.items.admissions.title'),
            description: t('categories.items.admissions.desc'),
            bg: "bg-5",
            link: "/what-we-do#admissions"
        },
        {
            icon: <FaHome />,
            title: t('categories.items.rent.title'),
            description: t('categories.items.rent.desc'),
            bg: "bg-6",
            link: "/what-we-do#rent"
        },
        {
            icon: <MdHealthAndSafety />,
            title: t('categories.items.health.title'),
            description: t('categories.items.health.desc'),
            bg: "bg-7",
            link: "/what-we-do#health-care"
        },
        {
            icon: <MdEvent />,
            title: t('categories.items.events.title'),
            description: t('categories.items.events.desc'),
            bg: "bg-1",
            link: "/what-we-do#events"
        },
        {
            icon: <FaHandHoldingHeart />,
            title: t('categories.items.personalCare.title'),
            description: t('categories.items.personalCare.desc'),
            bg: "bg-2",
            link: "/what-we-do#personal-care"
        },
        {
            icon: <IoIosSchool />,
            title: t('categories.items.freshCare.title'),
            description: t('categories.items.freshCare.desc'),
            bg: "bg-3",
            link: "/what-we-do#fresh-care-campus"
        },
        {
            icon: <FaFileAlt />,
            title: t('categories.items.loan.title'),
            description: t('categories.items.loan.desc'),
            bg: "bg-4",
            link: "/what-we-do#loans"
        },
        {
            icon: <FaFileAlt />,
            title: t('categories.items.lifeCare.title'),
            description: t('categories.items.lifeCare.desc'),
            bg: "bg-5",
            link: "/what-we-do#life-care-plans"
        }
    ];

    return (
        <section className="categories-section">
            <div className="container">
                <span className="section-label">
                    <span className="label-icon"><FaLayerGroup /></span>
                    {t('categories.label')}
                </span>
                <h2>{t('categories.title')}</h2>
                <p className="subtitle">{t('categories.subtitle')}</p>

                <div className="categories-grid">
                    {categories.slice(0, 10).map((cat, index) => (
                        <Link href={cat.link} key={index} className="category-link">
                            <div className={`category-card ${cat.bg}`}>
                                <div className="icon-wrapper">
                                    {cat.icon}
                                </div>
                                <h4 className="titleTag">{cat.title}</h4>
                                <p>{cat.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="categories-grid categories-grid-special">
                    {categories.slice(10).map((cat, index) => (
                        <Link href={cat.link} key={index} className="category-link">
                            <div className={`category-card ${cat.bg}`}>
                                <div className="icon-wrapper">
                                    {cat.icon}
                                </div>
                                <h4 className="titleTag">{cat.title}</h4>
                                <p>{cat.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="view-all-container">
                    <h4>{t('categories.panchayatToNation')}</h4>
                </div>
            </div>
        </section>
    );
};

export default Categories;
