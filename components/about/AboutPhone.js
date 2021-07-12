import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import alessioPic from '../../public/alessio.jpg'

function AboutPhone ({ sectionTitle, description }) {
  return (
    <div className='mb-[150px] w-[90%] mx-auto h-[850px] flex flex-col justify-between md:hidden'>
      <Image src={alessioPic} alt='Picture of Alessio' />
      <div className='h-[400px] flex flex-col justify-between sm:justify-around'>
        <h2 className='text-sectionTitle phone:mb-8 sm:mb-0'>{sectionTitle}</h2>
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
