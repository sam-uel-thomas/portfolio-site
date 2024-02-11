import React from 'react'

const HeroSection = () => {
    return (
        <div className='font-sans px-6 py-12 sm:px-24 sm:py-12'>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center sm:place-self-start text-center sm:text-left">
                    <div className="font-bold text-4xl">Hello, I'm Sam,</div>
                    <div className="text-xl my-4">I'm a student at Kings College London studying computer science</div>
                </div>
                <div className="col-span-5 place-self-center sm:place-self-start text-center mt-4">
                    <div className="w-[250px] h-[375px] sm:w-[400px] sm:h-[500px] bg-white mx-auto"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection