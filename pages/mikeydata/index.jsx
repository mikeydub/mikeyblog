import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import List from '../../components/List'

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
                <div className='mb-10'>
                    <a href='https://www.tiktok.com/@mikeydata'><PageHeader title='MIKEYDATA'/></a>
                    <p className='text-lg'>
                        sharing my learnings from my path into data science analytics...
                    </p>
                </div>
                {allPostsData && <List posts={allPostsData}/>}
                </section>
        </Page>
    )
}