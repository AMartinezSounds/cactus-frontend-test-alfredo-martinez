import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import alessioPic from '../../public/alessio.jpg'

function AboutTablet () {
  return (
    <div className='phone:hidden md:flex flex-col justify-between h-[788px] ls:hidden'>
      <Image src={alessioPic} alt='Picture of Alessio' className='object-cover  object-center' />
      <div className='h-[30%] min-h-[233px] flex flex-col justify-between'>
        <h2 className='text-sectionTitle'>About Me</h2>
        <div className='smallLine' />
        <p className='w-[91%] max-w-[550px]'>Speciliazing in Urban Design allowed me to focus on creating exceptional structures that live in harmony with their surroundings. I consider every detail from every surrounding element to inform my designs. </p>
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
