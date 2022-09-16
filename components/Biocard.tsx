const transitionCard = () => {
    const card = document.getElementById("biocard");
    if (card.className === "biocard-vis") {
        card.className = "biocard-hide";
    } else {
        card.className = "biocard-vis";
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