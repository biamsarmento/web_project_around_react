import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);

    // Verificando se o usuário atual é o dono do cartão atual
    const isOwn = props.card.owner._id === currentUser._id;

    // Criando uma variável que você definirá em `className` para o botão delete
    const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );

    // Verifique se o cartão foi curtido pelo usuário atual
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    // Criw uma variável que possa ser definida em `className` para o botão de curtir
    const cardLikeButtonClassName = (
        `${isLiked ? 'card__tag-like card__tag-like_liked' : 'card__tag-like'}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }
    
    return (
        <div className="card" key={props.card._id}>
            <button className={cardDeleteButtonClassName} onClick={props.onDeleteCardClick}></button>
            <button className="card__image-link" onClick={handleClick}>
                <img className="card__image" src={props.card.link} alt={props.card.name}/>
            </button>
            <div className="card__tag">
                <p className="card__tag-title">{props.card.name}</p>
                <div className="card__tag-likes">
                    <button className={cardLikeButtonClassName}></button>
                    <p className="card__tag-like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;