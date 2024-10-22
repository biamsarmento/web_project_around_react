import editSign from '../images/EditSign.png';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import React from 'react';
import Card from './Card';
import EditProfile from './EditProfile';
import EditAvatar from './EditAvatar';
import CurrentUserContext from '../contexts/CurrentUserContext';


function Main(props) {

    const [cards, setCards] = React.useState([]);
    const {currentUser} = React.useContext(CurrentUserContext);

    async function handleCardLike(card) {
        // Verificar mais uma vez se esse cartão já foi curtido
        const isLiked = card.likes.some(user => user._id === currentUser._id);
        
        // Enviar uma solicitação para a API e obter os dados do cartão atualizados
        await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
        }).catch((error) => console.error(error));
    }

    async function handleCardDelete(card) {
        await api.deleteCard(card._id)
            .then(() => {
                setCards((state) => 
                    state.filter((currentCard) => currentCard._id !== card._id)
                );
            })
            .catch((error) => console.error(error));
    }

    React.useEffect(() => {
        api.getInitialCards()
          .then((result) => {
            setCards(result); 
          })
          .catch((err) => {
            console.error("Erro ao obter cartões iniciais:", err);
          });
      }, []);

    return (
        <main className="content">
            
            <PopupWithForm title="Editar Perfil" name="profile-popup" isOpen={props.isEditProfilePopupOpen} onClose={props.onClose}>
                <EditProfile onClose={props.onClose}></EditProfile>
                {/* <input type="text" className="form__input form__input_type_name" id="nome" name="name" minLength="2" maxLength="40" required></input>
                <span className="form__input-error nome-error"></span>
                <input type="text" className="form__input form__input_type_activity" id="atividade" name="about" minLength="2" maxLength="200" required></input>
                <span className="form__input-error atividade-error"></span>
                <button type="submit" className="form__submit-button">Salvar</button> */}
            </PopupWithForm> 
            {/* <PopupWithForm title="Novo Local" name="new-card-popup" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}>
                <input type="text" className="form__input form__input_type_title" id="titulo" name="name" placeholder="Title" minLength="2" maxLength="30" required></input>
                <span className="form__input-error titulo-error"></span>
                <input type="url" className="form__input form__input_type_url" id="url" name="link" placeholder="Image URL" required></input>
                <span className="form__input-error url-error"></span>
                <button type="submit" className="form__submit-button">Salvar</button>
            </PopupWithForm>  */}
            {/* <PopupWithForm title="Tem certeza?" name="delete-popup" isOpen={props.isDeleteCardPopupOpen} onClose={props.onClose}>
                <button type="submit" className="form__submit-button">Sim</button>
            </PopupWithForm> */}
            <PopupWithForm title="Alterar a foto do perfil" name="edit-profile-pic-popup" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose}>
                <EditAvatar onClose={props.onClose}></EditAvatar>
                {/* <input type="url" className="form__input form__input_type_url" id="url" name="linkEditProfilePic" placeholder="https://somewebsite.com/someimage.jpg" required></input>
                <span className="form__input-error url-error"></span>
                <button type="submit" className="form__submit-button">Salvar</button> */}
            </PopupWithForm>
            <ImagePopup card={props.selectedCard} onClose={props.onClose}></ImagePopup>
            <section className="profile" id="profile">
                <button className="profile__avatar_button" onClick={props.onEditAvatarClick}>
                    <img src={editSign} alt="Edit Sign" className="profile__avatar_edit"></img>
                    <img
                    src={currentUser.avatar}
                    alt="Avatar"
                    className="profile__avatar"
                    ></img>
                </button>
                <div className="profile__info">
                    <h1 className="profile__info-title">{currentUser.name}</h1>
                    {/* <button className="profile__info-edit-button" onClick={props.onEditProfileClick}></button> */}
                    <button className="profile__info-edit-button" onClick={props.onEditProfileClick}></button>
                    <p className="profile__info-activity">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlaceClick}></button>
            </section>
            <section className="elements" id="elements">
            {cards.map((card) => {
                return (
                    <Card
                        key={card._id}
                        card={card}
                        onDeleteCardClick={props.onDeleteCardClick}
                        onCardDelete={handleCardDelete}
                        onCardLike={handleCardLike}
                        onCardClick={props.onCardClick}
                    />
                );
            })}
            </section>
        </main>
    )
}

export default Main;