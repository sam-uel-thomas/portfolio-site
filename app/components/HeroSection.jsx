import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const HeroSection = () => {
    const heroRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${window.scrollY * 0.8}px)`;
            }
            if (imageRef.current) {
                imageRef.current.style.transform = `rotate(${window.scrollY / 8}deg)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={heroRef} className='relative font-cabinet mt-16 px-6 py-12 sm:px-12 sm:py-24 text-center flex items-center justify-center'>
            <Image
                ref={imageRef}
                src="/images/BackgroundImage.svg"
                alt="logo"
                width={500}
                height={500}
                className="absolute z-0"
            />
            <div className='z-10 flex flex-col'>
                <div>
                    <div className="font-medium text-xl">HI I'M,</div>
                    <div className="text-[#E8E8E8] font-extrabold my-4 text-7xl sm:text-8xl md:text-9xl">SAM THOMAS</div>
                    <div className="text-xl mt-5 font-medium">A Computer Science student</div>
                    <div className="text-xl font-medium">at Kings College London</div>
                </div>
                {/* <div className="col-span-5 place-self-center sm:place-self-start text-center mt-4">
                    <div className="w-[250px] h-[375px] sm:w-[400px] sm:h-[500px] bg-white mx-auto"></div>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection