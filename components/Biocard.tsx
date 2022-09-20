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

const Biocard = () => {
    return (
        <div id="biocard" className="biocard-vis" onClick={transitionCard}>
            <h2>Hello There</h2>
        </div>
    )
};

export default Biocard;