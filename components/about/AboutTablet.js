import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import alessioPic from '../../public/alessio.jpg'

function AboutTablet ({ sectionTitle, description }) {
  return (
    <div className='phone:hidden mb-[150px] md:flex w-[78.39%] mx-auto flex-col justify-between h-[788px] ls:hidden'>
      <Image src={alessioPic} alt='Picture of Alessio' className='object-cover  object-center' />
      <div className='h-[30%] min-h-[233px] flex flex-col justify-between'>
        <h2 className='text-sectionTitle'>{sectionTitle}</h2>
        <div className='smallLine' />
        <p className='w-[91%] max-w-[550px]'>{description}</p>
      </div>
      <div className='py-[25px] ml-auto mr-0 mt-4'>
        <Link href='/'>
          <a className='btn '>View my profile</a>
        </Link>
      </div>		
    </div>
 )
}

export default AboutTablet
