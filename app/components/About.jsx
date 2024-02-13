import React from 'react'
import CircIcon from './CircIcon'
import RectIcon from './RectIcon'

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center text-[#383631]">
            <div className="font-sans flex flex-row justify-center items-center pt-12">
                <CircIcon fill="text-[#383631]" size={25} />
                <div className="font-sans text-5xl text-center font-extrabold mx-4">ABOUT</div>
                <RectIcon fill="text-[#383631]" size={25} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-11 gap-5 mt-16 font-medium text-2xl mx-6 sm:mx-24'>
            <div className='font-cabinet col-span-6'>
                <div className='mb-4'>
                    From my early days, fueled by childhood curiosity and a fascination for Scratch games, to crafting my first eclectic website, my journey into design and coding has been a continuous evolution.
                </div>
                <div className='mb-4'>
                    What fuels my passion is the seamless blend of design and code. Over the years, I've transformed from the chaos of childhood experiments into a designer who appreciates the nuances of aesthetics and functionality.
                </div>
                <div>
                    Embark with me on this narrative, bridging the gap between childhood curiosity and the artistry of adulthood. What excites me most is the dance of turning sketches into precise measured designs, crafting digital tales where design and code converge.                </div>
            </div>
            <div className='col-span-5'>
                PICTURE HERE
            </div>
            </div>
        </div>
    )
}

export default About