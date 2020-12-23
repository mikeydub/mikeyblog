import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import Link from 'next/link'

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
        <div className='md:mt-28 mb-10'><PageHeader title="WHO'S MIKE WEN?" subtitle='nobody...yet ;)'></PageHeader></div>
        <ul className='list-inside list-disc leading-relaxed'>currently i am:
          <li className='ml-4'>driving <a className='hover:text-red-500'href='https://music.apple.com'>Music</a> & <a className='hover:text-purple-500' href='https://podcasts.apple.com'>Podcasts</a> forward thru analytics</li>
          <li className='ml-4'>fighting for asian american representation in media at <a className='hover:text-yellow-400' href='https://goldhouse.org'>gold house</a></li>
          <li className='ml-4'>obsessing about and collecting digital art</li>
          <li className='ml-4'>teaching others about <a className='hover:text-green-500' href='https://www.tiktok.com/@mikeydata'>data science</a></li>
          <li className='ml-4'>sharing my love of <a className='hover:text-yellow-600 hover:text-opacity-25' href='https://www.tiktok.com/@mikeyoatmeal'>overnight oats</a> with the world</li>
        </ul>
        <br></br>
        <Link href='/about'><a className="flex-none underline text-gray-400 hover:text-black">more about me...</a></Link>
    </Page>
  )
}