"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/Legal.scss';

const TermsPage = () => {
    return (
        <div className="terms-page legal-page">
            <PageBanner
                title="Terms & Conditions"
                subtitle="Please read our terms of service carefully."
                label="Legal"
                bgImage="/principles.webp"
            />
            
            <section className="legal-content">
                <div className="container">
                    <span className="last-updated">Last Updated: January 24, 2026</span>

                    <div className="content-block">
                        <h3>1. Introduction</h3>
                        <p>Welcome to Connective India. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
                    </div>

                    <div className="content-block">
                        <h3>2. Use of services</h3>
                        <ul>
                            <li>You agree to use our services only for lawful purposes.</li>
                            <li>You must not use our platform to distribute spam or malicious content.</li>
                            <li>We reserve the right to suspend or terminate access for violations of these terms.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>3. Intellectual Property</h3>
                        <p>All content included on this site, such as text, graphics, logos, and images, is the property of Connective India or its content suppliers and protected by international copyright laws.</p>
                    </div>

                    <div className="content-block">
                        <h3>4. Limitation of Liability</h3>
                        <p>Connective India shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
                    </div>

                    <div className="content-block">
                        <h3>5. Changes to Terms</h3>
                        <p>We reserve the right to modify these terms at any time. Your continued use of the site after changes are posted constitutes your acceptance of the new terms.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
