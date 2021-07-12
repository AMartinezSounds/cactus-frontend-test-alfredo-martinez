import fetch from 'node-fetch'
import Image from 'next/image'
import Head from 'next/head'
export const getStaticPaths = async () => {
  const resText = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataText = await resText.json()
  const paths = dataText.map((index) => {
    return {
      params: { id: index.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps (context) {
  const id = context.params.id
  const resText = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const resImage = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
  const dataText = await resText.json()
  const dataImage = await resImage.json()
  return {
    props: { postText: dataText, postImage: dataImage }
  }
}

function Post ({ postText, postImage }) {
  return (
    <>
      <Head>
        <title>Alessio Muganni - blog - {postText.id}</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap' rel='stylesheet' />
      </Head>
      <div className='w-[90%] mx-auto desktop:pt-28'>
        <h1 className='text-sectionTitle leading-10 mb-8 ls:mb-20'>{postText.title}</h1>
        <div className='ls:flex'>
          <p className='mb-8 ls:mb-0 w-[60%] pr-12'>{postText.body}</p>
          <div>
            <Image className='object-contain' src={postImage.url} width={600} height={600} alt={postImage.title} />
            <p className='mb-10'>{postImage.title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
