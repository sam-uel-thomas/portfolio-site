import React from 'react'

const ScrollTag = () => {
    return (
        <div className='absolute bottom-0 right-0 flex flex-col items-end'>
            <div className='transform rotate-90 mb-4'>scroll</div>
            <div className="relative w-0.5 h-12 mb-5 mr-4">
                <div className="absolute top-0 left-0 w-full h-full bg-white origin-top animate-grow-shrink" />
                <div className="absolute top-0 left-0 w-full h-full bg-white origin-top animate-grow-shrink animation-delay-1000" />
            </div>
        </div>
    )
}

export default ScrollTag