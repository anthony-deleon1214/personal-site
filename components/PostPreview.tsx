import Link from "next/link";
import { urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
    posts: [Post];
};

export default function PostPreview(Props) {
    const post = Props.post
    return (
        <div className="post-preview group">
            <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div>
                    <img className="post-preview-img" src={urlFor(post.mainImage).url()!} alt="" />
                    <div className="post-preview-info">
                        <div>
                            <p className="text-lg font-bold">{post.title}</p>
                            <p className="text-xs">
                                {post.description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};