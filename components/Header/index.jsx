import Head from 'next/head'
import Nav from '../Nav'

const siteTitle = 'MIKE WEN'

export default function Header() {
    return (
        <div>
            <Head>
            {/* <link rel="shortcut icon" href="/mwfavicon.ico" /> */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
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
            <title>{siteTitle}</title>
            </Head>
            <Nav />
        </div>
    )
}