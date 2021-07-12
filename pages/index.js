import Head from 'next/head'
import About from '../components/about/About'
import Introduction from '../components/introduction/Introduction'
import Formulary from '../components/form/Formulary'

import Fade from 'react-reveal/Fade'

export default function Home () {
  return (
    <>
      <Head>
        <title>Alessio Muganni - Home</title>
        <link rel='icon' href='/logo.png' />
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap' rel='stylesheet' />
        <meta name='description' content='This is a portfolio and blog made by Alfredo Martínez for Estudio Cactus.' />
      </Head>
      <Fade>
        <section id='home'>
          <Introduction />
        </section>
      </Fade>
      <Fade fraction={0.3}>
        <section id='about'>
          <About />
        </section>
      </Fade>
      <Fade fraction={0.1}>
        <div className='smallSeparator' />
        <div className='largeSeparator' />
      </Fade>
      <Fade fraction={0.3}>
        <section id='contact'>
          <Formulary />
        </section>
      </Fade>
    </>
  )
}
