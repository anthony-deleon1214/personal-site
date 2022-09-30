import Link from "next/link";
import { urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
    posts: [Post];
};

export default function PostPreview(Props) {
    const post = Props.post
    return (
    <div>
        <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div>
                <img src={urlFor(post.mainImage).url()!} alt="" />
                <div className="post-preview-info">
                    <p>{post.title}</p>
                    <p>
                        {post.description} by {post.author.name}
                    </p>
                </div>
            </div>
        </Link>
    </div>
);
};