import Head from 'next/head'
import About from '../components/about/About'
import Introduction from '../components/introduction/Introduction'
import Layout from '../components/Layout'

export default function Home () {
  return (
    <Layout>
      <Head>
        <title>Alessio Muganni - Home</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap' rel='stylesheet' />
      </Head>
      <Introduction />
      <About />
    </Layout>

  )
}
