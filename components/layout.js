import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

const name = "WHO'S MIKE WEN?"
export const siteTitle = 'Mike Wen'

export default function Layout({ children, page }) {
  return (
    <div className='max-w-2xl py-1 mt-3 mb-6 mx-auto'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mike Wen's home on the internet."
        />
        {/* preload Heebo font */}
        <link
            rel="preload"
            href="/fonts/Heebo/Heebo-VariableFont_wght.ttf"
            as="font"
            crossOrigin=""
          />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* splitbee */}
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Nav />
      <header className='flex flex-col'>
        {page === 'home' ? (
          (
          <>
            <h1 className='text-6xl font-semibold tracking-tight mt-28 mb-20 hover:scale-110'>{name}</h1>
          </>
        )
        ) : (
          <>
            <Link href="/">
              <a>
              </a>
            </Link>
            <h2 className='text-lg font-medium tracking-tight mt-8 mb-20 ml-1'>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      {page === 'post' && (
        <div className='mb-4 underline text-gray-400 hover:text-black'>
          <Link href="/blog">
            <a>back to all posts</a>
          </Link>
        </div>
      )}
      <main>{children}</main>
      {page === 'post' && (
        <div className='mt-10 underline text-gray-400 hover:text-black'>
          <Link href="/blog">
            <a>see all posts</a>
          </Link>
        </div>
      )}
    </div>
  )
}