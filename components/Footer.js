import React from 'react'
import { Link } from 'react-scroll'
import { GrFacebook, GrInstagram, GrLinkedin } from 'react-icons/gr'

function Footer () {
  return (
    <footer className='h-[500px] bg-primary flex flex-col items-center justify-evenly ls:flex-row ls:h-[100px] ls:justify-around'>
      <h1 className='text-white'>Alessio Muganni</h1>
      <nav className='w-[60%] h-[30%] ls:w-[25%]'>
        <ul className='text-white flex flex-col items-center justify-between h-full ls:flex-row'>
          <li className='text-xl ls:text-base'><Link to='home' activeClass='active' spy={true} smooth={true} duration={750}>Home</Link></li>
          <li className='text-xl ls:text-base'><Link to='about' activeClass='active' spy={true} smooth={true} duration={750}>About</Link></li>
          <li className='text-xl ls:text-base'><Link to='contact' activeClass='active' spy={true} smooth={true} duration={750}>Contact</Link></li>
        </ul>
      </nav>
      <ul className='flex justify-between w-[40%] max-w-[150px]'>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com'>
            <GrFacebook style={{ color: 'white', fontSize: '1.4rem' }} />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com'>
            <GrInstagram style={{ color: 'white', fontSize: '1.4rem' }} />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com'>
            <GrLinkedin style={{ color: 'white', fontSize: '1.4rem' }} />
          </a>
        </li>
      </ul>		
    </footer>
  )
}

export default Footer
