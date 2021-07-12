import Head from 'next/head'
import Link from 'next/link'

export default function Pagination ({ page }) {
  return (
    <div className='flex justify-between w-[90%] mx-auto'>
      <Head>
        <title>Alessio Muganni - blog - {page} of ___</title>
      </Head>
      <Link href={`/blog/${page - 1}`}>
        <a aria-disabled={page <= 1}>-Prev-</a>
      </Link>
      <p>Page {page} of {10}</p>
      <p> {100} Posts Total</p>
      <Link href={`/blog/${page + 1}`}>
        <a aria-disabled={page >= 10}>-Next-</a>
      </Link>
    </div>
  )
}
