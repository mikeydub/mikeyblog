import SubscribeForm from '../SubscribeForm'
import Date from '../date'
import Link from 'next/link'

export default function PostContainer({ post }) {
    return (
        <>
            <div className='mb-20'>
                <div className="mt-16">
                    <Link href="/blog">
                        <a className='underline text-gray-400 hover:text-black'>back to all posts</a>
                    </Link>
                    <h1 className='text-6xl font-semibold tracking-tight mt-6'>{post.title}</h1>
                </div>
            <p className='text-sm text-gray-400'>
            <Date dateString={post.updated_at}/>
            </p>
            </div>
            <article className='prose font-prose lg:prose-xl'>
            <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </article>
            <p className='mt-24'>want more? subscribe to my newsletter for tactics that i used to break into data science.</p>
            <SubscribeForm />
            <Link href="/blog">
                <a className='underline text-gray-400 hover:text-black'>see all posts</a>
          </Link>
        </>
    )
}