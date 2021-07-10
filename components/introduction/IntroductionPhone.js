import React from 'react'

function IntroductionPhone () {
  return (
    <>
      <div 
        className='h-[45vh] flex items-end bg-black bg-center bg-cover md:hidden' 
        style={{ 'background-image': 'linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)), url(/cover.jpg)' }}
      >
        <div className='h-10 w-5/6 bg-white' />	
      </div>
      <div className='flex flex-col justify-start gap-y-7 md:hidden'>
        <h2 className='text-sectionTitle'>Introduction</h2>
        <p className='text-secondary font-semibold'>Over the past 10 years, I have worked on all kinds of projects. From stations to high-rise buildings, I create spaces that inspire and delight. </p>
        <p className='text-secondary font-semibold'>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
      </div>
    </>
  )
}

export default IntroductionPhone
