import React from 'react'

function IntroductionDesktop ({ sectionTitle }) {
  return (
    <div className='mb-[150px]'>
      <div
        className='bg-black bg-center bg-cover phone:hidden ls:block h-screen'
        style={{ 'background-image': 'linear-gradient(rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)), url(/cover.jpg)' }}
      />
      <div className='h-[240px] w-[42%] ml-[5rem] -mt-60 bg-transparent text-white phone:hidden ls:flex border-2 border-white'>
        <div className='h-full w-[80%] flex items-center mx-auto'>
          <h2 className='text-5xl'>{sectionTitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default IntroductionDesktop
