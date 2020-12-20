import Layout from '../../components/layout'
import Date from '../../components/date'
import { NotionRenderer } from "react-notion"
import { getAllPosts } from '../'

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}

export default ({ post, blocks }) => (
  <Layout page='post'>
  <div style={{ maxWidth: 768 }}>
    <div className='mb-10'>
      <h1 className='text-5xl font-semibold mb-4' >{post.title}</h1>
      <p className='text-sm text-gray-400'>
        <Date dateString={post.date} />
      </p>
    </div>
    <NotionRenderer blockMap={blocks} />
  </div>
  </Layout>
);

export async function getStaticPaths() {
    const posts = await getAllPosts();
    return {
      paths: posts.map((row) => `/blog/${row.slug}`),
      fallback: true,
    };
  }