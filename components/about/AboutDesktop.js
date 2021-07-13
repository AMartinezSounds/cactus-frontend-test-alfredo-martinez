import React from 'react'
import Link from 'next/link'

function AboutDesktop ({ sectionTitle, description }) {
  return (
    <div className='phone:hidden ls:flex justify-evenly mx-auto w-[100%] mb-[75px] h-[70vh] bg-[hsl(77,5%,95%)]'>
      <div className='w-[45%] h-[100%] flex flex-col justify-center'>
        <div
          className='bg-center bg-cover ls:block h-[50vh]'
          style={{ backgroundImage: 'url(/alessio.jpg)' }}
        />
      </div>
      <div className='flex flex-col justify-between w-[45%]'>
        <h2 className='text-sectionTitle'>{sectionTitle}</h2>
        <div className='smallLine' />
        <p className='w-[90%] tracking-[0.03rem]'>{description}</p>
        <div className='py-[25px]'>
          <Link href='/'>
            <a className='btn hover:bg-secondary active:bg-terciary transition duration-300 ease-in-out'>View my portfolio</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutDesktop
