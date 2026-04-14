"use client";
import React from 'react';
import PageBanner from '../../components/PageBanner';
import '../../styles/pages/FAQ.scss';

const FAQPage = () => {
    const faqData = [
        {
            question: "What is Connective India?",
            answer: "Connective India is an assisted service delivery platform that connects service seekers and service providers, ensuring trusted services at the right time and place."
        },
        {
            question: "Is Connective India only a mobile app?",
            answer: "No. Connective India is a complete assisted service ecosystem supported by technology, coordination, and customer support."
        },
        {
            question: "Who can join Connective India?",
            answer: "Individuals, families, businesses, professionals, institutions, and organizations can join as Service Seekers or Service Providers."
        },
        {
            question: "What types of services are available on Connective India?",
            answer: "Services include Jobs, Admissions, Buy & Sell, Rent & Rent Out, Health & Care, Matrimony, Events & Bookings, Personal & Home Care, Travel & Transport, and Business Services."
        },
        {
            question: "How do I register on Connective India?",
            answer: "You can register through the mobile app or website by providing your basic details and selecting your membership category."
        },
        {
            question: "Is there a membership fee?",
            answer: "Yes. Connective India offers different membership plans for Service Seekers, Service Providers, and Combo users based on the service level."
        },
        {
            question: "What is the difference between Ordinary and Premium membership?",
            answer: "Premium members receive higher visibility, priority support, wider service access, and additional benefits compared to ordinary members."
        },
        {
            question: "How does Connective India ensure trust and safety?",
            answer: "Profiles of service providers and seekers are verified to ensure genuine and reliable connections."
        },
        {
            question: "How does the assisted service system work?",
            answer: "Our support team helps with service requests, coordination, follow-ups, and communication to ensure smooth service delivery."
        },
        {
            question: "Can I use Connective India for multiple services?",
            answer: "Yes. A single membership allows you to access multiple service categories."
        },
        {
            question: "How do Service Providers get customers?",
            answer: "Service Providers receive service enquiries based on their category, location, and availability."
        },
        {
            question: "Is Connective India location-based?",
            answer: "Yes. Services are matched based on district or state to ensure faster and more convenient service."
        },
        {
            question: "Can businesses and institutions join as Service Providers?",
            answer: "Yes. Hospitals, schools, companies, agencies, and other organizations can register and offer their services."
        },
        {
            question: "How do I request a service?",
            answer: "You can submit your requirement through the app or website, and our team will assist in connecting you with the right provider."
        },
        {
            question: "Does Connective India guarantee service quality?",
            answer: "We ensure verified connections and assisted coordination, but the final service agreement is between the service seeker and provider."
        },
        {
            question: "Can I upgrade my membership later?",
            answer: "Yes. Members can upgrade their plan anytime to access additional benefits."
        },
        {
            question: "Is Connective India available across India?",
            answer: "Yes. Connective India is designed to operate across districts and states, with services expanding gradually."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can contact our support team through the app, website, or official customer care channels."
        },
        {
            question: "Can individuals earn through Connective India?",
            answer: "Yes. Skilled individuals, freelancers, and professionals can register as Service Providers and get service opportunities."
        },
        {
            question: "What makes Connective India different from other platforms?",
            answer: "Connective India offers verified profiles, location-based matching, and assisted service support — delivering the right service at the right place and time."
        }
    ];

    return (
        <div className="faq-page">
            <PageBanner
                title="FAQ"
                subtitle="Frequently asked questions about our services."
                label="Help center"
                bgImage="/principles.webp"
            />
            
            <section className="faq-content">
                <div className="container">
                    <div className="faq-grid">
                        {faqData.map((item, index) => (
                            <div className="faq-item" key={index}>
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
