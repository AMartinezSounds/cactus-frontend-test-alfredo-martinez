import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import alessioPic from '../../public/alessio.jpg'

function AboutPhone ({ sectionTitle, description }) {
  return (
    <div className='mb-[150px] w-[90%] mx-auto h-[670px] flex flex-col justify-between md:hidden'>
      <Image src={alessioPic} alt='Picture of Alessio' />
      <div className='h-[233px] flex flex-col justify-between sm:justify-around'>
        <h2 className='text-sectionTitle'>{sectionTitle}</h2>
	      <p className='sm:w-[80%]'>{description}</p>
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
