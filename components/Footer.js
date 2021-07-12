import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'
import { GrFacebook, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { useRouter } from 'next/router'
function Footer () {
  const router = useRouter()
  return (
    <footer className={`${router.pathname.includes('/blog') ? 'h-[150px]' : 'h-[500px]'} bg-primary flex flex-col items-center justify-evenly ls:flex-row ls:h-[100px] ls:justify-around`}>
      <Link href='/'><a><h1 className='text-white'>Alessio Muganni</h1></a></Link>
      <nav className='w-[60%] h-[30%] ls:w-[25%]'>
        <ul className='text-white flex flex-col items-center justify-between h-full ls:flex-row'>
          <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><LinkScroll to='home' smooth duration={750}>Home</LinkScroll></li>
          <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><LinkScroll to='about' smooth duration={750} offset={-75}>About</LinkScroll></li>
          <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><LinkScroll to='contact' smooth duration={750} offset={-75}>Contact</LinkScroll></li>
          <li className={router.pathname.includes('/blog') ? 'hidden' : ''}><Link href='/blog'>Blog</Link>
          </li>
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
