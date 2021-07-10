import Head from 'next/head'
import Layout from '../components/Layout'
import About from '../components/about/About'
import Introduction from '../components/introduction/Introduction'
import Formulary from '../components/form/Formulary'


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
      <Formulary />
    </Layout>

  )
}
