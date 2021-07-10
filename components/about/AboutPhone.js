import React from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import alessioPic from '../../public/alessio.jpg'

function AboutPhone () {
  return (
    <div className='h-[670px] flex flex-col justify-between md:hidden'>
      <Image src={alessioPic} alt='Picture of Alessio' />
      <div className='h-[233px] flex flex-col justify-between'>
        <h2 className='text-sectionTitle'>About Me</h2>
	<p>Speciliazing in Urban Design allowed me to focus on creating exceptional structures that live in harmony with their surroundings. I consider every detail from every surrounding element to inform my designs. </p>
      </div>
      <div className='py-[25px]'>
        <Link href='/'>
          <a className='btn '>View my profile</a>
        </Link>
      </div>		
    </div>
 )
}

export default AboutPhone