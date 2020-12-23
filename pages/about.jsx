import Head from 'next/head'
import Header from '../components/Header'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
    return (
        <Page>
                <section>
                <div className="mt-16 lg:mt-28"><PageHeader title='ABOUT'/></div>
                <p><b className='font-semibold'>currently product data at <a className='hover:text-red-500'href='https://music.apple.com'>Music</a> & <a className='hover:text-purple-500' href='https://podcasts.apple.com'>Podcasts</a>.
          </b> fellow at <a className='hover:text-yellow-400' href='https://goldhouse.org'>gold house</a>. 
          previously <a className='hover:text-gray-400' href='https://www.bird.co'>bird</a> and <a className='hover:text-blue-500' href='https://jmi.com'>
            jmi equity</a>. retired <a className='hover:text-blue-300' href='https://www.swimcloud.com/swimmer/167857/'>D1 swimmer</a> at Penn. 
            lover of athletics, films, delightful products, and oatmeal.</p>
          <br></br>
          <p>
            questions? reach me at me@mikewen.co
          </p>
          <br></br>
                </section>
        </Page>
    )
}