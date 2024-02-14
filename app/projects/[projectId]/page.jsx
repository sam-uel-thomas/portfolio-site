"use client"
import React from 'react';
import ProjectData from '../../data/ProjectData.json';
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import BackArrow from '../../components/BackArrow'

export default function Page({ params }) {
    const project = ProjectData.find(project => project.id === params.projectId);
    const router = useRouter();

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <div className='bg-[#E8E8E8] cursor-default relative px-6 py-12 sm:px-12 sm:py-24 text-center justify-center h-screen'>
            <button 
                onClick={() => router.back()} 
                className='absolute top-4 left-4 bg-[#383631] text-[#E8E8E8] rounded-full p-3'
            >
                <BackArrow color="#E8E8E8" size="25px"/>
            </button>
            <div className='z-10 flex flex-col'>
                <div>
                    <div className="text-[#383631] font-sans font-extrabold my-4 text-7xl sm:text-8xl md:text-9xl">{project.title}</div>
                    <div className="text-[#383631] text-xl font-medium font-cabinet">{project.description}</div>
                </div>
                <div className='mt-4 flex flex-wrap w-full justify-center items-center'>
                    {project.languages.map((language, index) => (
                        <span key={index} className='inline-block border-2 border-[#383631] text-[#383631] bg-transparent rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'>{language}</span>
                    ))}
                    {project.skills.map((skill, index) => (
                        <span key={index} className='inline-block border-2 border-[#383631] text-[#E8E8E8] bg-[#383631] rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}