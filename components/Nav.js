import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import MobileNav from './MobileNav'

function Nav ({ crossButton, setCrossButton }) {
  const router = useRouter()
  return (
    <nav className='flex z-10 h-24 desktop:absolute top:0 left-[5rem] right-[5rem] bg-white'>
      <div className='w-[90%] mx-auto flex justify-between items-center md:w-[77.39%] ls:w-11/12 '>
        <Link href='/'><a><h1>Alessio Muganni</h1></a></Link>
        {crossButton === 'false'
          ? <ul className='hidden sm2:flex justify-between w-5/12 md:w-4/12'>
            <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><LinkScroll to='home' smooth duration={750}>Home</LinkScroll></li>
            <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><LinkScroll to='about' smooth duration={750} offset={-75}>About</LinkScroll></li>
            <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><LinkScroll to='contact' smooth duration={750} offset={-75}>Contact</LinkScroll></li>
            <li className={router.pathname.includes('/blog') ? 'ml-auto mr-0' : ''}><Link href='/blog'>Blog</Link></li>
            {/* eslint-disable-next-line */}
            </ul>
          : <MobileNav setCrossButton={setCrossButton} crossButton={crossButton} />}
        <div className='block sm2:hidden' onClick={() => crossButton === 'false' ? setCrossButton('true') : setCrossButton('false')}>
          {crossButton === 'false' ? <GiHamburgerMenu style={{ fontSize: '1.5rem' }} /> : <FaTimes style={{ fontSize: '1.5rem' }} />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
