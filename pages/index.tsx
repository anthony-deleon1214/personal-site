import Link from 'next/link';
import Layout from '../components/Layout';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post];
};

const IndexPage = ({ posts }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

export const getServerSideProps = async() => {
  const query = `*[_type == "post"] {
    _id,
    title,
    author -> {
      name,
      image
  },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  }
}
