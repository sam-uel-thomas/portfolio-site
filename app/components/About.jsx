import React from 'react'
import CircIcon from './CircIcon'
import RectIcon from './RectIcon'

const About = () => {
    return (
        <div className="flex flex-row justify-center items-center pt-12">
            <CircIcon fill="text-[#0E0E0C]" size={25} />
            <div className="text-[#0E0E0C] font-sans text-5xl text-center font-extrabold mx-4">ABOUT</div>
            <RectIcon fill="text-[#0E0E0C]" size={25} />
        </div>
    )
}

export default About