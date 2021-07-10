import React from 'react'

function IntroductionTablet ({ sectionTitle, description1, description2 }) {
  return (
    <div className='w-[78.39%] mx-auto desktop:hidden'>
      <div 
        className='h-[671px] bg-black bg-center bg-cover phone:hidden md:block ls:hidden' 
        style={{ 'background-image': 'linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)), url(/cover.jpg)' }}/>
      <div className='h-[433px] mx-auto -mt-44 w-5/6 bg-white phone:hidden md:flex flex-col border ls:hidden'>
        <div className='h-full w-4/6 mx-auto'>
          <h2 className='text-5xl mt-4'>{sectionTitle}</h2>
          <div className='smallLine my-8' />
          <p className='text-secondary font-bold'>{description1}</p>
          <p className='my-8 text-secondary font-bold'>{description2}</p>
        </div>
      </div>
    </div>
  )
}

export default IntroductionTablet
