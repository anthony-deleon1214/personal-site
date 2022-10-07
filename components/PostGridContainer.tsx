import { Post } from "../typings";
import Link from 'next/link';
import { urlFor } from "../sanity";
import PostPreview from "./PostPreview";

interface Props {
    posts: [Post];
};

const PostGridContainer = ({ posts }: Props) => {
    return (
        <div id="post-container" className="post-container-lg">
            <div className="post-grid">
                {posts.map(post => <PostPreview post={post} />)}
            </div>
        </div>
    )
};

export default PostGridContainer;