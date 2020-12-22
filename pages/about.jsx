import Head from 'next/head'
import Header from '../components/Header'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
    return (
        <Page>
                <section>
                <PageHeader title='ABOUT'/>
                <p className='mt-6'>loading...</p>
                </section>
        </Page>
    )
}