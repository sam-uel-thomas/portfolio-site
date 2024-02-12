import React from 'react'
import CircIcon from './CircIcon'
import RectIcon from './RectIcon'

const Projects = () => {
    return (
        <div className="flex flex-row justify-center items-center pt-12">
            <RectIcon fill="text-[#383631]" size={25} rotate={180}/>
            <div className="text-[#383631] font-sans text-5xl text-center font-extrabold mx-4">PROJECTS</div>
            <CircIcon fill="text-[#383631]" size={25} />
        </div>
    )
}

export default Projects