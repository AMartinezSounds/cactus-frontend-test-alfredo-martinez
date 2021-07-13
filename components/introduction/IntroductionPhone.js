import React from 'react'

function IntroductionPhone ({ sectionTitle }) {
  return (
    <div className='w-[90%] mx-auto'>
      <div
        className='h-[50vh] flex items-end bg-black bg-center bg-cover md:hidden'
        style={{ backgroundImage: 'linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(/coverPhone.jpg)' }}
      >
        <div className='h-10 w-5/6 bg-white -mb-px -ml-px' />
      </div>
      <div className='flex flex-col justify-start w-[90%] md:hidden'>
        <h2 className='text-sectionTitle leading-10'>{sectionTitle}</h2>
      </div>
    </div>
  )
}

export default IntroductionPhone
