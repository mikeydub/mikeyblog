import PostPage from '../../components/Page/postpage'
import PostContainer from '../../components/PostContainer'
import { useRouter } from 'next/router'

const BLOG_URL = process.env.BLOG_URL
const CONTENT_API_KEY = process.env.CONTENT_API_KEY

export async function getPosts(slug) {
  const res = await fetch(
      `${BLOG_URL}ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}`
      ).then((res) => res.json())
  console.log(res.posts[0])
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
    return <p class>loading...</p>
  }
  return (
    <PostPage>
        <PostContainer post={ post } />
    </PostPage>
    );
}

