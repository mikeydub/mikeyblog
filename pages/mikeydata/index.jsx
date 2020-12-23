import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import List from '../../components/List'
import SubscribeForm from '../../components/SubscribeForm'

const BLOG_URL = process.env.BLOG_URL
const CONTENT_API_KEY = process.env.CONTENT_API_KEY

export async function getAllPosts() {
    const res = await fetch(
        `${BLOG_URL}ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
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
        <Page>
                <section>
                <div className='mt-28 mb-10'>
                    <a href='https://www.tiktok.com/@mikeydata'><PageHeader title='MIKEYDATA' subtitle='sharing my learnings from my path into data science analytics...'/></a>
                    <p className='my-12'></p>
                    <SubscribeForm text='want to get updated when i share a new post? sign up here.'/>
                </div>
                {allPostsData && <List posts={allPostsData}/>}
                </section>
        </Page>
    )
}