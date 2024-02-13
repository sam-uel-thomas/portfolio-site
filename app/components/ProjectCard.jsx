// Define the ProjectCard component
function ProjectCard({ title = "", link = "#", languages = [], skills = [] }) {
    return (
        <div className='flex flex-col items-center w-full'>
            <a href={link} className='w-full'>
                <div className='h-64 border-2 border-[#383631] rounded-xl relative group transition-all duration-400 w-full shadow-lg'>
                    <div className='absolute bottom-0 left-0 m-4 font-sans text-[#383631] px-3 py-1 rounded-full transition-colors duration-500 transition-border border-transparent group-hover:border-[#383631] group-hover:bg-[#383631] group-hover:text-[#E8E8E8]'>{title}</div>
                </div>
            </a>
            <div className='mt-4 flex flex-wrap w-full'>
                {languages.map((language, index) => (
                    <span key={index} className='inline-block border-2 border-[#383631] text-[#383631] bg-transparent rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'>{language}</span>
                ))}
                {skills.map((skill, index) => (
                    <span key={index} className='inline-block border-2 border-[#383631] text-[#E8E8E8] bg-[#383631] rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'>{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard