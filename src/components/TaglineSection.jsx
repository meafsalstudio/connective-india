"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import '../styles/components/TaglineSection.scss';

// Import avatar images
const avatar1 = "/avatar/img1.webp";
const avatar2 = "/avatar/img2.webp";
const avatar3 = "/avatar/img3.webp";
const avatar4 = "/avatar/img4.webp";
const avatar5 = "/avatar/img5.webp";
const avatar6 = "/avatar/img6.webp";
const avatar7 = "/avatar/img7.webp";
const avatar8 = "/avatar/img8.webp";
const avatar9 = "/avatar/img9.webp";
const avatar10 = "/avatar/img10.webp";
const avatar11 = "/avatar/img11.webp";
const avatar12 = "/avatar/img12.webp";
const avatar13 = "/avatar/img13.webp";
const avatar14 = "/avatar/img14.webp";

gsap.registerPlugin(ScrollTrigger);

const TaglineSection = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const textLinesRef = useRef([]);
    const bubblesRef = useRef([]);

    // Expanded list of chat bubbles for more density
    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14];
    const positions = Array.from({ length: 22 }).map((_, i) => ({
        avatar: avatars[i % avatars.length],
        // Random starting direction to come from "around" the screen
        startPos: {
            x: (Math.random() - 0.5) * 2000,
            y: (Math.random() - 0.5) * 2000,
            angle: Math.random() * 360
        }
    }));

    useEffect(() => {
        const ctx = gsap.context(() => {
            const validLines = textLinesRef.current.filter(line => line !== null);
            const validBubbles = bubblesRef.current.filter(bubble => bubble !== null);

            if (validLines.length === 0) return;

            gsap.set(validLines, { opacity: 0, scale: 0.8 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=300%',
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            // Diamond shape math for bubbles
            const isTablet = window.innerWidth < 768;
            const isMobile = window.innerWidth < 425;
            const diamondSize = isTablet ? 280 : 320;
            const diamondSizeMobile = isMobile ? 240 : diamondSize;

            validBubbles.forEach((bubble, i) => {
                const total = validBubbles.length;
                const t = i / total;
                let tx, ty;

                // Divide bubbles into 4 sides of the diamond
                if (t < 0.25) { // Top to Right
                    const st = t * 4;
                    tx = st * diamondSizeMobile;
                    ty = (st - 1) * diamondSizeMobile;
                } else if (t < 0.5) { // Right to Bottom
                    const st = (t - 0.25) * 4;
                    tx = (1 - st) * diamondSizeMobile;
                    ty = st * diamondSizeMobile;
                } else if (t < 0.75) { // Bottom to Left
                    const st = (t - 0.5) * 4;
                    tx = -st * diamondSizeMobile;
                    ty = (1 - st) * diamondSizeMobile;
                } else { // Left to Top
                    const st = (t - 0.75) * 4;
                    tx = (st - 1) * diamondSizeMobile;
                    ty = -st * diamondSizeMobile;
                }

                // Animate from random outside position to diamond position
                const startX = positions[i].startPos.x;
                const startY = positions[i].startPos.y;

                tl.fromTo(bubble,
                    {
                        x: startX,
                        y: startY,
                        opacity: 0,
                        scale: 0.5,
                        top: '50%',
                        left: '50%'
                    },
                    {
                        x: tx,
                        y: ty,
                        xPercent: -50,
                        yPercent: -50,
                        opacity: 0.9,
                        scale: 0.8,
                        duration: 4, // Increased duration for slower animation
                        ease: 'power2.inOut', // Smoother ease
                    }, 0
                );
            });

            validLines.forEach((line, index) => {
                tl.to(line, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                }, index * 1.2);

                if (index < validLines.length - 1) {
                    tl.to(line, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.5,
                        ease: 'power2.in',
                    }, index * 1.2 + 0.7);
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="tagline-section">
            <div className="bubbles-container">
                {positions.map((item, index) => (
                    <div
                        key={index}
                        className="chat-bubble"
                        ref={(el) => (bubblesRef.current[index] = el)}
                        style={{ position: 'absolute' }}
                    >
                        <div className="avatar">
                            <img src={item.avatar} alt={`Avatar ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-container">
                <h2>
                    {[t('tagline.anything'), t('tagline.anywhere'), t('tagline.anytime'), t('tagline.anyone')].map((text, i) => (
                        <div key={i} ref={(el) => (textLinesRef.current[i] = el)} className="text-line">
                            {text}
                        </div>
                    ))}
                </h2>
            </div>
        </section>
    );
};

export default TaglineSection;
