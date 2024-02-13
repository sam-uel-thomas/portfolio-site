import React from 'react'
import CircIcon from './CircIcon'
import RectIcon from './RectIcon'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const Projects = () => {
    return (
        <section className='mx-24 mb-24'>
            <div className="flex flex-row justify-center items-center pt-12">
                <RectIcon fill="text-[#383631]" size={25} rotate={180}/>
                <div className="text-[#383631] font-sans text-5xl text-center font-extrabold mx-4">PROJECTS</div>
                <CircIcon fill="text-[#383631]" size={25} />
            </div>
            <div className='grid grid-cols-3 gap-4 pt-12'>
                <ProjectCard 
                    title="PROJECT 1"
                    languages={["LANGUAGE"]} 
                    skills={["SKILLS"]}
                    link='#'
                />
                <ProjectCard 
                    title="PROJECT 2"
                    languages={["LANGUAGE"]} 
                    skills={["SKILLS"]}
                    link='#'
                />
                <ProjectCard 
                    title="PROJECT 3"
                    languages={["LANGUAGE"]} 
                    skills={["SKILLS"]}
                    link='#'
                />
                <ProjectCard 
                    title="PROJECT 4"
                    languages={["LANGUAGE"]} 
                    skills={["SKILLS"]}
                    link='#'
                />
                <ProjectCard 
                    title="PROJECT 5"
                    languages={["LANGUAGE"]} 
                    skills={["SKILLS"]}
                    link='#'
                />
                <ProjectCard 
                    title="PROJECT 6"
                    languages={["LANGUAGE"]} 
                    skills={["SKILLS"]}
                    link='#'
                />
            </div>
        </section>
    )
}

export default Projects