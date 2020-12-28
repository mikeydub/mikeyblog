import SubscribeForm from '../SubscribeForm'
import Date from '../date'
import Link from 'next/link'
import PageHeader from '../PageHeader'

export default function PostContainer({ post }) {
    return (
        <>
            <div className='mb-20'>
                <div className="mt-16">
                    <Link href="/mikeydata">
                        <a className='underline text-gray-400 hover:text-black'>back to all posts</a>
                    </Link>
                    <div className='mt-6'><PageHeader title={post.title}/></div>
                </div>
            <p className='mt-2 text-gray-400 font-mono'>
            <pre><Date dateString={post.updated_at}/>  ·  {post.reading_time} MIN READ</pre>
            </p>
            </div>
            <article className='prose font-prose lg:prose-xl'>
            <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </article>
            <div className="mt-24">
                <SubscribeForm text='want more? subscribe to my newsletter for everything i used to break into data science.'/>
            </div>
            <Link href="/mikeydata">
                <a className='underline text-gray-400 hover:text-black'>see all posts</a>
          </Link>
        </>
    )
}