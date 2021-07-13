import React from 'react'
import Link from 'next/link'

function AboutTablet ({ sectionTitle, description }) {
  return (
    <div className='phone:hidden md:flex w-[87%] mx-auto flex-col justify-between h-[788px] ls:hidden'>
      <div
        className='bg-center bg-cover ls:block h-[50vh]'
        style={{ backgroundImage: 'url(/alessio.jpg)' }}
      />
      <div className='h-[50%] mt-4 min-h-[233px] flex flex-col justify-between'>
        <h2 className='text-sectionTitle'>{sectionTitle}</h2>
        <div className='smallLine' />
        <p className='max-w-[600px]'>{description}</p>
      </div>
      <div className='py-[25px] ml-auto mr-0 mt-4'>
        <Link href='/'>
          <a className='btn '>View my portfolio</a>
        </Link>
      </div>
    </div>
  )
}

export default AboutTablet
