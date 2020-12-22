import Link from 'next/link'
import Page from '../../components/Page'
import Head from 'next/head'
import Date from '../../components/date'
import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import Layout, { siteTitle } from "../../components/layout";
import CenteredColumn from '../../components/Layouts';
import Footer from '../../components/Footer'

const BLOG_URL = process.env.BLOG_URL
const CONTENT_API_KEY = process.env.CONTENT_API_KEY

export async function getAllPosts() {
    const res = await fetch(
        `${BLOG_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,excerpt,reading_time,published_at`
        ).then((res) => res.json())

    return res.posts
}

export async function getStaticProps() {
  const allPostsData = await getAllPosts()
  return {
    props: {
      allPostsData,
      revalidate: 60 * 60
    }
  }
}

export default function Blog({ allPostsData }) {
    return (
        <CenteredColumn>
                <Header/>
                <section>
                <div className='mb-16'>
                    <a href='https://www.tiktok.com/@mikeydata'><PageHeader title='MIKEYDATA'/></a>
                    {/* <h1 className=''><a href='https://www.tiktok.com/@mikeydata'>MIKEYDATA</a></h1> */}
                    <p className='text-lg'>
                        sharing my learnings from my path into data science analytics...
                    </p>
                </div>
                <ul>
                    {allPostsData.map((post) => (
                        <div className='p-10 mt-3 mb-12 border border-gray-100 hover:bg-gray-100'>
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>
                            <a className='text-2xl font-medium text-gray-800'>{post.title}</a>
                            </Link>
                            <br />
                            <p className='mt-2 text-sm text-gray-400'>
                                <Date dateString={post.published_at} />
                            </p>
                        </li>
                        </div>
                    ))}
                </ul>
                </section>
            <Footer/>
        </CenteredColumn>
    )
}