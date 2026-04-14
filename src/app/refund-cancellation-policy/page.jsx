"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/Legal.scss';

const RefundCancellationPolicyPage = () => {
    return (
        <div className="privacy-page legal-page">
            <PageBanner
                title="Refund Cancellation Policy"
                subtitle="Connective India is a digital platform that connects users with service providers, sellers, and professionals across various categories. We do not directly own, manufacture, or deliver services/products listed on the platform."
                label="Legal"
                bgImage="/principles.webp"
            />

            <section className="legal-content">
                <div className="container">
                    <span className="last-updated">Last Updated: January 24, 2026</span>

                    <div className="content-block">
                        <h3>1. Nature of Transactions</h3>
                        <p>All bookings, purchases, or service requests made through Connective India are facilitated between users and independent service providers or sellers registered on the platform.</p>
                        <p>Connective India acts only as an intermediary to enable smooth communication, discovery, and transaction support.</p>
                    </div>

                    <div className="content-block">
                        <h3>2. Cancellation Policy</h3>
                        <ul>
                            <li>Cancellation of any service, booking, or order is subject to the individual provider’s or seller’s cancellation terms.</li>
                            <li>Users must review the provider’s terms before confirming any booking or payment.</li>
                            <li>In case of cancellation requests, users should initiate the request through the platform or contact the respective provider directly.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>3. Refund Policy</h3>
                        <ul>
                            <li>Refunds, if applicable, are processed based on the provider’s refund policy.</li>
                            <li>Connective India does not guarantee refunds for services/products once the transaction is confirmed.</li>
                            <li>Any eligible refunds will be processed within a reasonable time frame after approval from the respective provider.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>4. Platform Responsibility</h3>
                        <ul>
                            <li>Connective India may assist in facilitating communication between users and providers for refund or cancellation requests.</li>
                            <li>However, the final decision regarding refunds or cancellations lies with the service provider or seller.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>5. User Responsibility</h3>
                        <ul>
                            <li>Users are advised to carefully review service details, pricing, provider credibility, and terms before making any transaction.</li>
                            <li>Connective India is not responsible for dissatisfaction arising from services or products delivered by third-party providers.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>6. Dispute Resolution</h3>
                        <ul>
                            <li>Any disputes regarding cancellations, refunds, or service quality must be resolved directly between the user and the service provider/seller.</li>
                            <li>Connective India may provide support in mediation but does not take liability for final outcomes.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>7. Digital Products / Subscription Plans (if applicable)</h3>
                        <ul>
                            <li>Subscription plans, featured listings, or promotional services purchased on Connective India are non-refundable unless explicitly stated otherwise.</li>
                            <li>Once activated, these services cannot be canceled or refunded.</li>
                        </ul>
                    </div>

                    <div className="content-block">
                        <h3>8. Policy Updates</h3>
                        <p>Connective India reserves the right to update or modify this policy at any time without prior notice.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundCancellationPolicyPage;
