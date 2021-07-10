import React from 'react'

function IntroductionDesktop ({ sectionTitle, description1, description2 }) {
  return (
    <div className='mb-[150px]'>
      <div 
        className='bg-black bg-center bg-cover phone:hidden ls:block h-screen' 
        style={{ 'background-image': 'linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)), url(/cover.jpg)' }} />
      <div className='h-[370px] w-[90%] max-w-[938px] ml-[5rem] -mt-60 bg-white phone:hidden ls:flex flex-col border'>
        <div className='h-full w-[753px] mx-auto'>
          <h2 className='text-5xl mt-8'>{sectionTitle}</h2>
          <div className='smallLine my-8' />
          <p className='text-secondary font-bold'>{description1}</p>
          <p className='my-8 text-secondary font-bold'>{description2}</p>
        </div>
      </div>
    </div>
  )
}

export default IntroductionDesktop
