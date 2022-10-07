import { Post } from "../typings";

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
        </div>
    )
};

export default Biocard;