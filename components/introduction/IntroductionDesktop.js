import React from 'react'

function IntroductionDesktop () {
  return (
    <div className='desktop:h-screen'>
      <div 
        className='h-[80vh] bg-black bg-center bg-cover phone:hidden desktop:block' 
        style={{ 'background-image': 'linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)), url(/cover.jpg)' }} />
      <div className='h-[370px] w-[938px] ml-24 -mt-44 bg-white phone:hidden desktop:flex flex-col border'>
        <div className='h-full w-[753px] mx-auto'>
          <h2 className='text-5xl mt-8'>Introduction</h2>
          <div className='h-px w-[100px] my-8 bg-terciary' />
          <p className='text-secondary font-bold'>Over the past 10 years, I have worked on all kinds of projects. From stations to high-rise buildings, I create spaces that inspire and delight. </p>
          <p className='my-8 text-secondary font-bold'>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
        </div>
      </div>
    </div>
  )
}

export default IntroductionDesktop
