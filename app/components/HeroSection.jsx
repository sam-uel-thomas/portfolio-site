import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const HeroSection = () => {
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${window.scrollY * 0.8}px)`;
            }
            if (imageRef.current) {
                imageRef.current.style.transform = `rotate(${window.scrollY / 8}deg)`;
            }
            const scrollPosition = window.scrollY;
            let landingHeight = 0;
            if (heroRef.current) {
                landingHeight = heroRef.current.offsetHeight;
            }

            if (scrollPosition <= landingHeight) {
                const newOpacity = 1 - scrollPosition / (2 * landingHeight);
                setOpacity(newOpacity);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={heroRef} className='cursor-default relative font-cabinet mt-16 px-6 py-12 sm:px-12 sm:py-24 text-center flex items-center justify-center'>
            <Image
                ref={imageRef}
                src="/images/BackgroundImage.svg"
                alt="logo"
                width={500}
                height={500}
                className="absolute z-0"
                style={{ opacity }}
            />
            <div className='z-10 flex flex-col' style={{ opacity }}>
                <div>
                    <div className="font-medium text-xl">HI I'M,</div>
                    <div className="text-[#E8E8E8] font-extrabold my-4 text-7xl sm:text-8xl md:text-9xl">SAM THOMAS</div>
                    <div className="text-xl mt-5 font-medium">A COMPUTER SCIENCE STUDENT</div>
                    <div className="text-xl font-medium">AT KINGS COLLEGE LONDON</div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection