import { Post } from "../typings";
import PortableText from "react-portable-text";

interface Props {
    post: Post;
}

const transitionCard = () => {
    const card = document.getElementById("biocard");
    const postContainer = document.getElementById("post-container");
    if (card.className === "biocard-vis") {
        card.className = "biocard-hide";
        postContainer.className = "post-container-lg";
    } else {
        card.className = "biocard-vis";
        postContainer.className = "post-container-sm";
    };
};

const Biocard = ({ post }: Props) => {
    const author = post.author
    return (
        <div id="biocard" className="biocard-hide" onClick={transitionCard}>
            <h2>Hello There</h2>
            <p>{author.name}</p>
            <PortableText
                        className="invisible"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={author.bio}
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
    )
};

export default Biocard;