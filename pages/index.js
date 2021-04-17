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
        <div className='mt-16 lg:mt-28 mb-10'><PageHeader title="WHO'S MIKE WEN?" subtitle='nobody........yet'></PageHeader></div>
        <ul className='list-inside list-disc leading-relaxed'>currently i am
          <li className='mt-2 ml-4'>based in la</li>
          <li className='ml-4'>creating the community-owned digital museum for NFTs at <a className='hover:text-gray-500' href='https://twitter.com/usegallery'>Gallery</a></li>
          {/* <li className='ml-4'>building the number one source all things NFTs at <a className='hover:text-gray-500' href='https://twitter.com/nftdrops'>NFTDrops</a></li> */}
          <li className='ml-4'><strike>driving Music & Podcasts forward with data</strike> recently quit :)</li>
          <li className='ml-4'>pushing for asian american representation in media at <a className='hover:text-gray-500' href='https://goldhouse.org'>Gold House</a></li>
        </ul>
        <br></br>
        <Link href='/about'><a className="flex-none underline text-gray-400 hover:text-black">more about me...</a></Link>
        <br></br>
        <br></br>
        <p>questions? reach me at me@mikewen.co</p>
    </Page>
  )
}