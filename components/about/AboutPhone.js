import React from 'react'
import Link from 'next/link'

function AboutPhone ({ sectionTitle, description }) {
  return (
    <div className='h-[880px] flex flex-col justify-between md:hidden'>
      <div
        className='bg-top bg-cover ls:block h-[35vh]'
        style={{ backgroundImage: 'url(/alessioPhone.jpg)' }}
      />
      <div className='h-[400px] flex flex-col justify-between sm:justify-around'>
        <h2 className='text-sectionTitle phone:mb-8 -mt-8 sm:mb-0'>{sectionTitle}</h2>
        <p>{description}</p>
      </div>
      <div className='py-[25px]'>
        <Link href='/'>
          <a className='btn'>View my portfolio</a>
        </Link>
      </div>
    </div>
  )
}

export default AboutPhone
