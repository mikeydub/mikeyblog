import Page from '../components/Page'
import PageHeader from '../components/PageHeader'

export default function About() {
    return (
        <Page>
                <section>
                {/* <div className="mt-16 lg:mt-28 mb-12"><PageHeader title='ABOUT' subtitle='in progress...'/></div> */}
                <div className="mt-16 lg:mt-28 mb-12"><PageHeader title='ABOUT' /></div>
                <ul className='list-inside list-disc leading-relaxed'>previously
                    <li className='ml-4'>invested in software companies at JMI Equity</li>
                    <li className='ml-4'>experimented with a novel models of transportation at Bird</li>
                    <li className='ml-4'>swam 4 years at Penn</li>
                </ul>
                {/* <div className='mt-16'>
                    <p className='font-bold'>Q: what do you do for work?</p>
                    <br></br>
                    <p className=''>i currently work at apple on Music and Podcasts as a product data scientist. previously, i was at bird trying to make micromobility work and before that i was investing in software companies at jmi equity.</p>
                    <br></br>
                    <p className='font-bold'>Q: what school did you go to?</p>
                    <br></br>
                    <p className=''>i went to penn and studied finance and comp sci. i competed all four years on the d1 swim team.</p>
                    <br></br>
                    <p className='font-bold'>Q: what do you like to do for fun?</p>
                    <br></br>
                    <p className=''>something new i've been enjoying is swimming in the ocean.</p>
                    <br></br>
                    <p className='font-bold'>Q: cool well thanks for your time.</p>
                    <br></br>
                    <p className=''>no prob.</p>
                    <br></br>
                </div> */}

                <div className='mt-8 mb-24'>
                  will add more to look at here at some point.
                  <br></br>
                  <br></br>
                  in the meantime, if you want to chat just dm me on twitter :) 
                </div>
          <br></br>
                </section>
        </Page>
    )
}