import React from 'react'
import CircIcon from './CircIcon'
import RectIcon from './RectIcon'

const Projects = () => {
    return (
        <div className="flex flex-row justify-center items-center pt-12">
            <RectIcon fill="text-[#0E0E0C]" size={25} rotate={180}/>
            <div className="text-[#0E0E0C] font-sans text-5xl text-center font-extrabold mx-4">PROJECTS</div>
            <CircIcon fill="text-[#0E0E0C]" size={30} />
        </div>
    )
}

export default Projects