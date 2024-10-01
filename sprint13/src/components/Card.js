
function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }
    
    return (
        <div className="card" key={props.card._id}>
            <button className="card__delete-button" onClick={props.onDeleteCardClick}></button>
            <button className="card__image-link" onClick={handleClick}>
                <img className="card__image" src={`${props.card.link}`} alt={`props.card.name`}/>
            </button>
            <div className="card__tag">
                <p className="card__tag-title">{props.card.name}</p>
                <div className="card__tag-likes">
                    <button className="card__tag-like"></button>
                    <p className="card__tag-like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;