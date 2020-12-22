import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Date from '../../components/date'
import Body from '../../components/body'
import { useRouter } from 'next/router'

const BLOG_URL = process.env.BLOG_URL
const CONTENT_API_KEY = process.env.CONTENT_API_KEY

export async function getPosts(slug) {
  const res = await fetch(
      `${BLOG_URL}ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,reading_time,updated_at,html`
      ).then((res) => res.json())

  return res.posts[0]
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPosts(slug)
  
  return {
    props: {
     post,
     revalidate: 20
    },
  }
}

export const getStaticPaths = () => {
  
  return {
    paths: [],
    fallback: true
  }
}

export default function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>loading...</h1>
  }
  return (
    <Layout page='post'>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <div style={{ maxWidth: 768 }}>
        <div className='mb-10'>
          <h1 className='text-5xl font-semibold mb-4'>{post.title}</h1>
          <p className='text-sm text-gray-400'>
          <Date dateString={post.updated_at} />
          </p>
        </div>
        {/* <Body post={post} /> */}
        <article class='prose font-prose lg:prose-xl'>
          <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
        </article>
    </div>
    </Layout> 
    );
}

