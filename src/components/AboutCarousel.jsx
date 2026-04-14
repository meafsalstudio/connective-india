"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/components/AboutCarousel.scss';

// Static image paths
const carousel1 = "/jobs/img1.webp";
const carousel2 = "/jobs/img2.webp";
const carousel3 = "/jobs/img3.webp";
const carousel4 = "/jobs/img4.webp";
const carousel5 = "/jobs/img5.webp";
const carousel6 = "/jobs/img6.webp";
const carousel7 = "/jobs/img7.webp";
const carousel8 = "/jobs/img8.webp";
const carousel9 = "/jobs/img9.webp";
const carousel10 = "/jobs/img11.webp";
const carousel11 = "/jobs/img12.webp";

const AboutCarousel = () => {
    const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10, carousel11];
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="about-carousel-placeholder" style={{ height: '400px' }}></div>;

    return (
        <section className="about-carousel-section">
            <div className="carousel-container">
                <Swiper
                    key={mounted ? 'swiper-mounted' : 'swiper-unmounted'}
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4.2,
                            spaceBetween: 30,
                        }
                    }}
                    className="about-swiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={`${img}-${index}`}>
                            <div className="carousel-slide-inner">
                                <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default AboutCarousel;
