import React from 'react'

const HeroSection = () => {
  return (
    <div className='font-sans px-24 py-12'>
        <div className="flex flex-row">
            <div className="flex flex-col mt-12">
                <div className="font-bold text-4xl">Hello, I'm Sam,</div>
                <div className="text-xl my-4">I'm a student at Kings College London studying computer science</div>
            </div>
            <div className="w-[400px] h-[500px] bg-white ml-36"></div>
        </div>
    </div>
  )
}

export default HeroSection