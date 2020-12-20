import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
    return (
        <Layout page='about'>
            <Head>
            <title>{siteTitle}</title>
            </Head>
            <section>
            <h1 className='text-6xl font-semibold mb-16'>ABOUT</h1>
            <p>loading...</p>
            </section>
        </Layout>
    )
}