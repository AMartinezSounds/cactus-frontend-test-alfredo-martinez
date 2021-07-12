import React from 'react'

function IntroductionTablet ({ sectionTitle }) {
  return (
    <div className='w-[78.39%] mx-auto desktop:hidden'>
      <div 
        className='h-[671px] bg-black bg-center bg-cover phone:hidden md:flex justify-center items-end  ls:hidden' 
        style={{ 'background-image': 'linear-gradient(rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)), url(/cover.jpg)' }}>
        <div className='h-[176px] w-[75%] bg-white phone:hidden md:flex ls:hidden'>
          <div className='h-full w-[90%] mx-auto flex items-center'>
            <h2 className='text-5xl'>{sectionTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionTablet
