import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from "../components/layout";

const NOTION_BLOG_ID = '3672c8010da9404aa143b20ed50ab348'

const BLOG_URL = process.env.BLOG_URL
const CONTENT_API_KEY = process.env.CONTENT_API_KEY

// export const getAllPosts = async () => {
// 	return await fetch(
//     `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
//   ).then((res) => res.json());
// }

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
      revalidate: 20
    }
  }
}

export default function Blog({ allPostsData }) {
    return (<Layout page='blog'>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section>
        <div className='mb-16'>
            <h1 className='text-6xl font-semibold mb-4'><a href='https://www.tiktok.com/@mikeydata'>MIKEYDATA</a></h1>
            <p className=''>
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
        </Layout>
    )
}