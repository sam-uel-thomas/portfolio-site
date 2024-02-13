import React, { useEffect, useRef } from 'react'
import CircIcon from './CircIcon'
import RectIcon from './RectIcon'

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (contactRef.current) {
                contactRef.current.style.transform = `translateY(${(scrollHeight - scrollPosition) * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={contactRef} className='text-[#E8E8E8] font-sans flex flex-col justify-center items-center'>
            <div className="flex flex-row justify-center items-center pt-12">
                <CircIcon fill="text-[#E8E8E8]" size={25} />
                <div className="text-5xl text-center font-extrabold mx-4">CONTACT</div>
                <CircIcon fill="text-[#E8E8E8]" size={25} />
            </div>
            <div className='font-medium pt-4'>
                EMAIL ME: samuel.mmthomas@gmail.com
            </div>
            <div className='font-medium pt-4'>
                or fill out this contact form below
            </div>
        </div>
    )
}

export default Contact