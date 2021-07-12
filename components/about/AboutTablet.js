import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import alessioPic from '../../public/alessio.jpg'

function AboutTablet ({ sectionTitle, description }) {
  return (
    <div className='phone:hidden mb-[150px] md:flex w-[78.39%] mx-auto flex-col justify-between h-[788px] ls:hidden'>
      <Image src={alessioPic} alt='Picture of Alessio' className='object-cover  object-center' />
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
