"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Header.scss';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        // Initialize lastScrollY with current position on mount
        lastScrollY.current = window.scrollY;

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Always show header if mobile menu is open
            if (isMenuOpen) {
                setIsVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY.current) {
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY.current) {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', controlNavbar, { passive: true });

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const isActive = (path) => {
        if (!pathname) return '';
        // Exact match for home, otherwise check if pathname starts with path
        const isPathActive = path === '/'
            ? pathname === '/'
            : pathname === path || pathname.startsWith(`${path}/`);
        return isPathActive ? 'active' : '';
    };
    const { language, changeLanguage, t } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleLanguageDropdown = () => setIsLangOpen(!isLangOpen);
    const handleLanguageSelect = (lang) => {
        changeLanguage(lang);
        setIsLangOpen(false);
    };
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className={`header ${!isVisible ? 'header--hidden' : ''} ${language === 'ML' ? 'header--ml' : ''}`}>
                <div className="container">
                    <div className="headerMian">
                        <div className="headerCol1">
                            <Link href="/" className="header__brand">
                                <img src="/logoFinal11.webp" alt="Connective India" />
                            </Link>
                        </div>
                        <div className="headerCol2">
                            <nav className="header__nav">
                                <ul>
                                    <li><Link href="/" className={isActive('/')}>{t('header.home')}</Link></li>
                                    <li><Link href="/about" className={isActive('/about')}>{t('header.about')}</Link></li>
                                    <li><Link href="/how-it-works" className={isActive('/how-it-works')}>{t('header.howItWorks')}</Link></li>
                                    <li><Link href="/what-we-do" className={isActive('/what-we-do')}>{t('header.whatWeDo')}</Link></li>
                                    <li><Link href="/careers" className={isActive('/careers')}>{t('header.careers')}</Link></li>
                                    <li><Link href="/contact" className={isActive('/contact')}>{t('header.contact')}</Link></li>
                                </ul>
                            </nav>

                            <div className="header__actions">

                                <div className="navLanguageSwitch" ref={langRef} onClick={toggleLanguageDropdown}>
                                    <div className="navLanguageSwitchBox">
                                        <div className="navLanguageSwitchText">
                                            {language}
                                        </div>
                                        <div className="icon">
                                            <FiChevronDown style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                                        </div>
                                    </div>
                                    {isLangOpen && (
                                        <div className="langDropdown">
                                            <div className={`langOption ${language === 'EN' ? 'active' : ''}`} onClick={() => handleLanguageSelect('EN')}>
                                                English
                                            </div>
                                            <div className={`langOption ${language === 'ML' ? 'active' : ''}`} onClick={() => handleLanguageSelect('ML')}>
                                                Malayalam
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <Link href="/downloadApp" className="btn-get-started">{t('header.downloadApp')}</Link>

                                <div className="navBar">
                                    <div className="navBarBox" onClick={toggleMenu}>
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Side Menu - Moved outside <header> to avoid transform interference */}
            <div className={`side-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="side-menu-header">
                    <img src="/logoFinal11.webp" alt="Connective India" className="mobile-logo" />
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>&times;</button>
                </div>
                <ul className="side-nav-links">
                    <li><Link href="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>{t('header.home')}</Link></li>
                    <li><Link href="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>{t('header.about')}</Link></li>
                    <li><Link href="/how-it-works" className={isActive('/how-it-works')} onClick={() => setIsMenuOpen(false)}>{t('header.howItWorks')}</Link></li>
                    <li><Link href="/what-we-do" className={isActive('/what-we-do')} onClick={() => setIsMenuOpen(false)}>{t('header.whatWeDo')}</Link></li>
                    <li><Link href="/careers" className={isActive('/careers')} onClick={() => setIsMenuOpen(false)}>{t('header.careers')}</Link></li>
                    <li><Link href="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</Link></li>
                    <li className="mobile-lang-switch">
                        <div className="mobile-lang-options">
                            <div className={`lang-chip ${language === 'EN' ? 'active' : ''}`} onClick={() => changeLanguage('EN')}>
                                English
                            </div>
                            <div className={`lang-chip ${language === 'ML' ? 'active' : ''}`} onClick={() => changeLanguage('ML')}>
                                Malayalam
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
