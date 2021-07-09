import Head from 'next/head'
import Navbar from '../src/components/Nav/Navbar'
import Footer from '../src/components/footer/Footer'
export default function Home () {
  return (
    <div className=''>
      <Head>
        <title>Alessio Muganni</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500&display=swap' rel='stylesheet' />
      </Head>

      <main className=''>
        <Navbar />
        <p className='font-serif'>Project start</p>
        <Footer />
      </main>
    </div>
  )
}
