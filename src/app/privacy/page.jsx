"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/Legal.scss';

const PrivacyPage = () => {
    return (
        <div className="privacy-page legal-page">
            <PageBanner
                title="Privacy Policy"
                subtitle="We are committed to protecting your personal information."
                label="Legal"
                bgImage="/principles.webp"
            />
            
            <section className="legal-content">
                <div className="container">
                    <span className="last-updated">Last Updated: January 24, 2026</span>

                    <div className="content-block">
                        <h3>1. Information we collect</h3>
                        <p>We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us.</p>
                        <ul>
                            <li>Name, email address, and phone number.</li>
                            <li>Profile information and preferences.</li>
                            <li>Usage data and device information.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>2. How we use your information</h3>
                        <p>We use the information we collect to provide, maintain, and improve our services, including to:</p>
                        <ul>
                            <li>Process transactions and send related information.</li>
                            <li>Respond to your comments and questions.</li>
                            <li>Monitor and analyze trends and usage.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>3. Data sharing</h3>
                        <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
                    </div>

                    <div className="content-block">
                        <h3>4. Security</h3>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </div>

                    <div className="content-block">
                        <h3>5. Your choices</h3>
                        <p>You may update or correct your account information at any time by logging into your account or contacting us.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
