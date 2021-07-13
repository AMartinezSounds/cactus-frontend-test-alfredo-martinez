import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import MobileNav from './MobileNav'
import NavLink from './NavLink'
function Nav ({ crossButton, setCrossButton }) {
  const router = useRouter()
  return (
    <nav className={`${router.pathname.includes('/blog') ? 'phone:flex-col justify-center' : ''} flex z-10 h-24 desktop:absolute top:0 left-[5rem] right-[5rem] bg-white`}>
      <div className={`${router.pathname.includes('/blog') ? 'phone:flex-col justify-center' : ''} w-[90%] mx-auto flex justify-between items-center md:w-[78.5%] ls:w-11/12`}>
        <Link href='/' onClick={() => setCrossButton('false')}><a><h1 className={router.pathname.includes('/blog') ? 'text-4xl' : ''}>Alessio Muganni</h1></a></Link>
        {crossButton === 'false'
          ? <ul className='hidden sm2:flex justify-between w-5/12 md:w-6/12 items-center'>
            <NavLink section='home' nameLink='Home' />
            <NavLink section='about' nameLink='About' offset={-75} setCrossButton={setCrossButton} />
            <NavLink section='contact' nameLink='Contact' offset={-75} setCrossButton={setCrossButton} />
            <li className={`btnBlog btnAnimation ${router.pathname.includes('/blog') ? 'hidden' : ''}`}><Link href='/blog'>Blog</Link></li>
            {/* eslint-disable-next-line */}
            </ul>
          : <MobileNav setCrossButton={setCrossButton} crossButton={crossButton} className={router.pathname.includes('/blog') ? 'hidden' : ''} />}
        <div className='block sm2:hidden' onClick={() => crossButton === 'false' ? setCrossButton('true') : setCrossButton('false')}>
          {crossButton === 'false' ? <GiHamburgerMenu className={router.pathname.includes('/blog') ? 'hidden' : ''} style={{ fontSize: '1.5rem' }} /> : <FaTimes className={router.pathname.includes('/blog') ? 'hidden' : ''} style={{ fontSize: '1.5rem' }} />}
        </div>
      </div>
    </nav>
  )
}

export default Nav
