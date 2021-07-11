import React from 'react'

function IntroductionPhone ({ sectionTitle, description1, description2 }) {
  return (
    <div className='w-[90%] mx-auto'>
      <div 
        className='h-[45vh]  flex items-end bg-black bg-center bg-cover md:hidden' 
        style={{ 'background-image': 'linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)), url(/cover.jpg)' }}
      >
        <div className='h-10 w-5/6 bg-white -mb-px -ml-px' />	
      </div>
      <div className='flex flex-col justify-start gap-y-7 md:hidden'>
        <h2 className='text-sectionTitle'>{sectionTitle}</h2>
        <p className='sm2:w-[90%]'>{description1}</p>
        <p className='sm2:w-[90%]'>{description2}</p>
      </div>
    </div>
  )
}

export default IntroductionPhone
