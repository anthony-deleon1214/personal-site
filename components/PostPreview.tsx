const PostPreview = (props) => {
    return (
        <div id={props.title} className="post-preview">
            <h3>{props.title}</h3>
        </div>
    )
};

export default PostPreview;