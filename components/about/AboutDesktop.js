import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import alessioPic from '../../public/alessio.jpg'

function AboutDesktop ({ sectionTitle, description }) {
  return (
    <div className='phone:hidden ls:flex justify-between mx-auto w-[88.8%] mb-[75px]'>
      <div className='w-[47%] h-[100%]'>
        <Image src={alessioPic} alt='Picture of Alessio' className='object-cover' />
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
