import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import SubscribeForm from '../components/SubscribeForm'
import Form from '../components/SubscribeForm'

const NOTION_BLOG_ID = '3672c8010da9404aa143b20ed50ab348'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const allPostsData = await getAllPosts()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Page>
        <div className='mb-20'><PageHeader title="WHO'S MIKE WEN"></PageHeader></div>
        
        <section>
          <p><b className='font-medium'>currently product data at <a className='hover:text-red-500'href='https://music.apple.com'>Music</a> & <a className='hover:text-purple-500' href='https://podcasts.apple.com'>Podcasts</a>.
          </b> fellow at <a className='hover:text-yellow-400' href='https://goldhouse.org'>gold house</a>. 
          previously <a className='hover:text-gray-400' href='https://www.bird.co'>bird</a> and <a className='hover:text-blue-500' href='https://jmi.com'>
            jmi equity</a>. retired <a className='hover:text-blue-300' href='https://www.swimcloud.com/swimmer/167857/'>D1 swimmer</a> at Penn. 
            lover of athletics, films, delightful products, and oatmeal.</p>
          <br></br>
          <p>
            <b className='font-medium'>i'm working on a breaking into data science analytics course.</b> sign up below to my email list to get updates and early access on all new content.
          </p>
          <br></br>
          <SubscribeForm/>
          <br></br>
          <p>
            questions? reach me at me@mikewen.co
          </p>
          <br></br>
        </section>
    </Page>
  )
}