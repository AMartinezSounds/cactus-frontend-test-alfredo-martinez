import React from 'react'
import Link from 'next/link'

function AboutDesktop ({ sectionTitle, description }) {
  return (
    <div className='phone:hidden ls:flex justify-between mx-auto w-[90%] mb-[75px] h-[70vh] bg-gray-50'>
      <div className='w-[47%] h-[100%]'>
        <div
          className='bg-center bg-cover ls:block h-[50vh]'
          style={{ backgroundImage: 'url(/alessio.jpg)' }}
        />
      </div>
      <div className='flex flex-col justify-between w-[47%]'>
        <h2 className='text-sectionTitle'>{sectionTitle}</h2>
        <div className='smallLine' />
        <p className='w-[90%] tracking-[0.03rem]'>{description}</p>
        <div className='py-[25px]'>
          <Link href='/'>
            <a className='btn '>View my portfolio</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutDesktop
