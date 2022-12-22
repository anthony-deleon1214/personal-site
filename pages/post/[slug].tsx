import { GetStaticProps } from "next";
import { client, urlFor } from "../../sanity";
import { Post } from '../../typings';
import Sidebar from '../../components/Sidebar';
import PortableText from "react-portable-text";

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    return (
        <div key={post._id}>
            <Sidebar />
            <img className="post-image" src={urlFor(post.mainImage).url()!} alt="" />

            <div className="post-content-container">
                <article className="post-content">
                    <h1 className="post-title">{post.title}</h1>
                    <h2 className="post-description">{post.description}</h2>
                    <p className="publish-date">
                        Published at {" "}
                        {new Date(post._createdAt).toLocaleString()}
                    </p>

                    <div>
                        <PortableText
                            className=""
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={post.body}
                            serializers={
                                {
                                    h1: (props: any) => (
                                        <h1 className="text-2xl font-bold my-5" {...props}/>
                                    ),
                                    h2: (props: any) => (
                                        <h1 className="text-2xl font-bold my-5" {...props} />
                                    ),
                                    li: ({ children }: any) => (
                                        <li className="ml-4 list-disc">{children}</li>
                                    ),
                                    link: ({ href, children }: any) => (
                                        <a href={href} className="text-blue-500 hover:underline">
                                            {children}
                                        </a>
                                    ),
                                }
                            }
                        />
                    </div>
                </article>
            </div>
        </div>
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