import Link from 'next/link';
import Layout from '../components/Layout';
import { client, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post];
};

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <Layout posts={posts}></Layout>
  )
}

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

  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  }
}
