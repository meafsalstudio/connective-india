import React from 'react';
import '../styles/components/clientLogo.scss';

const logos = [
    { id: 1, src: '/clientLogo/logo1.webp', alt: 'Client 1' },
    { id: 2, src: '/clientLogo/logo2.webp', alt: 'Client 2' },
    { id: 3, src: '/clientLogo/logo3.webp', alt: 'Client 3' },
    { id: 4, src: '/clientLogo/logo4.webp', alt: 'Client 4' },
    { id: 5, src: '/clientLogo/logo5.webp', alt: 'Client 5' },
    { id: 6, src: '/clientLogo/logo6.webp', alt: 'Client 6' },
    { id: 7, src: '/clientLogo/logo7.webp', alt: 'Client 7' },
    { id: 8, src: '/clientLogo/logo8.webp', alt: 'Client 8' },
    { id: 8, src: '/clientLogo/logo9.webp', alt: 'Client 9' },
];

export default function ClientLogo() {
    return (
        <section className="clientLogo">
            <div className="container">
                <div className="marqueeContainer">
                    <div className="marqueeContent">
                        {logos.map((logo) => (
                            <div key={logo.id} className="logoItem">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate set for seamless looping */}
                    <div className="marqueeContent" aria-hidden="true">
                        {logos.map((logo) => (
                            <div key={`dup-${logo.id}`} className="logoItem">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
