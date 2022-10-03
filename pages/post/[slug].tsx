import { GetStaticProps } from "next";
import { client, urlFor } from "../../sanity";
import { Post } from '../../typings';
import Sidebar from '../../components/Sidebar';

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    return (
        <main>
            <Sidebar />
        </main>
    )
};

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == 'post']{
        _id,
        slug {
            current
        }
    }`;

    const posts = await client.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image
        },
        description,
        mainImage,
        slug,
        body
    }`

    const post = await client.fetch(query, {
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post,
        }
    }
};