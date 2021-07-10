import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import alessioPic from '../../public/alessio.jpg'

function AboutDesktop () {
  return (
    <div className='phone:hidden ls:flex justify-between mx-auto w-[88.8%]'>
      <div className='w-[47%] h-[100%]'>
        <Image src={alessioPic} alt='Picture of Alessio' className='object-cover' />
      </div>
      <div className='flex flex-col justify-between w-[47%]'>
        <h2 className='text-sectionTitle mt-4'>About Me</h2>
        <div className='smallLine' />
        <p className='w-[65%]'>Speciliazing in Urban Design allowed me to focus on creating exceptional structures that live in harmony with their surroundings. I consider every detail from every surrounding element to inform my designs. </p>
	<div className='py-[25px]'>
        <Link href='/'>
          <a className='btn '>View my profile</a>
        </Link>
      </div>
      </div>		
    </div>
 )
}

export default AboutDesktop
