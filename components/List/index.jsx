import Link from 'next/link'
import Date from '../date'

export default function List({ posts }) {
    if (!posts || posts.length === 0 ) return null
    return (
        <div className="class flex flex-col divide-y">
            {posts.map((post) => (
                <div className='flex flex-col py-6 px-6 hover:bg-gray-100' key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        <a className='text-xl font-medium hover:text-gray-500'>{post.title}</a>
                    </Link>
                    {post.excerpt && <p className='my-2 text-gray-500'>{post.excerpt}</p>}
                    <p className='text-sm text-gray-400 mb-2 font-semibold tracking-tight'>
                        <Date dateString={post.updated_at} />
                    </p>
                    <Link href={`/blog/${post.slug}`}><a className='flex-none underline text-purple-500 hover:text-black'>read more...</a></Link>
                </div>
            ))}
        </div>
    )
}