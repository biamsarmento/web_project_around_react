import avatar from '../images/Avatar.png';
import editSign from '../images/EditSign.png';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import paisagem from '../images/image1.png'
import api from '../utils/api';
import React from 'react';
import Card from './Card';


function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
        .then((result) => {
            setUserName(result.name);
            setUserDescription(result.about);
            setUserAvatar(result.avatar);
        })
        .catch((err) => {
            console.error("Erro ao obter Usrr Info:", err);
        });

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
                <input type="text" className="form__input form__input_type_name" id="nome" name="name" defaultValue="Jacques Cousteau" minLength="2" maxLength="40" required></input>
                <span className="form__input-error nome-error"></span>
                <input type="text" className="form__input form__input_type_activity" id="atividade" name="about" defaultValue="Explorar" minLength="2" maxLength="200" required></input>
                <span className="form__input-error atividade-error"></span>
                <button type="submit" className="form__submit-button">Salvar</button>
            </PopupWithForm> 
            <PopupWithForm title="Novo Local" name="new-card-popup" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}>
                <input type="text" className="form__input form__input_type_title" id="titulo" name="name" placeholder="Title" minLength="2" maxLength="30" required></input>
                <span className="form__input-error titulo-error"></span>
                <input type="url" className="form__input form__input_type_url" id="url" name="link" placeholder="Image URL" required></input>
                <span className="form__input-error url-error"></span>
                <button type="submit" className="form__submit-button">Salvar</button>
            </PopupWithForm> 
            <PopupWithForm title="Tem certeza?" name="delete-popup" isOpen={props.isDeleteCardPopupOpen} onClose={props.onClose}>
                <button type="submit" className="form__submit-button">Sim</button>
            </PopupWithForm>
            <PopupWithForm title="Alterar a foto do perfil" name="edit-profile-pic-popup" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose}>
                <input type="url" className="form__input form__input_type_url" id="url" name="linkEditProfilePic" placeholder="https://somewebsite.com/someimage.jpg" required></input>
                <span className="form__input-error url-error"></span>
                <button type="submit" className="form__submit-button">Salvar</button>
            </PopupWithForm>
            <PopupWithImage card={props.selectedCard} onClose={props.onClose}></PopupWithImage>
            <section className="profile" id="profile">
                <button className="profile__avatar_button" onClick={props.onEditAvatarClick}>
                    <img src={editSign} alt="Edit Sign" className="profile__avatar_edit"></img>
                    <img
                    src={`${userAvatar}`}
                    alt="Avatar Image"
                    className="profile__avatar"
                    ></img>
                </button>
                <div className="profile__info">
                    <h1 className="profile__info-title">{userName}</h1>
                    <button className="profile__info-edit-button" onClick={props.onEditProfileClick}></button>
                    <p className="profile__info-activity">{userDescription}</p>
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
                        onCardClick={props.onCardClick}
                    />
                );
            })}
            </section>
        </main>
    )
}

export default Main;