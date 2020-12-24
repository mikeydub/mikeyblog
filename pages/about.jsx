import Head from 'next/head'
import Header from '../components/Header'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
    return (
        <Page>
                <section>
                <div className="mt-16 lg:mt-28 mb-12"><PageHeader title='ABOUT' subtitle='interview with myself // december 23, 2020.'/></div>
                <div className='mt-16'>
                    <p className='font-bold'>Q: what do you do for work?</p>
                    <br></br>
                    <p className=''>i currently work at apple on Music and Podcasts as a product data scientist. previously, i was at bird trying to make micromobility work and before that i was investing in software companies at jmi equity.</p>
                    <br></br>
                    <p className='font-bold'>Q: what school did you go to?</p>
                    <br></br>
                    <p className=''>i went to penn and studied finance and comp sci. i swam d1 all four years on the varsity team.</p>
                    <br></br>
                    <p className='font-bold'>Q: what are you working on outside of work?</p>
                    <br></br>
                    <p>i'm teaching others about data science by sharing the lessons from my journey at <a className='underline text-gray-400 hover:text-black' href='https://www.tiktok.com/@mikeydata'>@mikeydata</a>; obsessing about <a href='https://niftygateway.com/profile/mikew'>   art and NFTs</a>; pushing for greater asian american representation at <a className='underline text-gray-400 hover:text-yellow-500' href='https://goldhouse.org'>gold house</a>.</p>
                    <br></br>
                    <p className='font-bold'>Q: ok..anything else?</p>
                    <br></br>
                    <p className=''>oh yea i also co-founded and growing the west coast penn swimming and diving alumni group. and my goal is to learn how to build so making side projects when i can.</p>
                    <br></br>
                    <p className='font-bold'>Q: alright. what do you like to do for fun?</p>
                    <br></br>
                    <p className=''>goofin around with friends is good. something new i've been enjoying is swimming in the ocean. that's been fun.</p>
                    <br></br>
                    <p className='font-bold'>Q: what are you most proud of this year?</p>
                    <br></br>
                    <p className=''>my mustache. i never in my life did i think i could do it. but here i am and it's moderately respectable! goes to show you should never settle on your dreams.</p>
                    <br></br>
                    <p className='font-bold'>Q: what are some of your favorite stuff?</p>
                    <br></br>
                    <p className=''>favorite movie is probaly call me by your name. this year? hmm. little women. i just love timmy chalamet. favorite director rn is taika waititi. favorite comedian -- nathan fielder 100%. favorite novel...pachinko. favorite biography is steve jobs book. favorite artist is frank ocean. favorite breakfast is overnight oats by a mile. idk why everyone doesn't eat overnight oats.</p>
                    <br></br>
                    <p className='font-bold'>Q: cool well thanks for your time.</p>
                    <br></br>
                    <p className=''>hey no prob. it's always been a dream to be interviewed. if you have anything else, hit me up anytime at me(at)mikewen.co</p>
                    <br></br>
                </div>
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