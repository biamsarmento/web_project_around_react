import avatar from '../images/Avatar.png';
import editSign from '../images/EditSign.png';
import PopupWithForm from './PopupWithForm';

import paisagem from '../images/image1.png'

// function handleEditAvatarClick() {
//     document.querySelector(".edit-profile-pic-popup").classList.add("edit-profile-pic-popup_opened");
// }

// function handleEditProfileClick() {
//     document.querySelector(".profile-popup").classList.add("profile-popup_opened");
// }

// function handleAddPlaceClick() {
//     document.querySelector(".new-card-popup").classList.add("new-card-popup_opened");
// }

// function handleDeleteCardClick() {
//     document.querySelector(".delete-popup").classList.add("delete-popup_opened");
// }

function Main(props) {
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
            <section className="image-popup" id="image-popup">
                <div className="image-popup__container">
                    <img className="image-popup__picture"></img>
                    <p className="image-popup__title"></p>
                    <button className="image-popup__close-button"></button>
                </div>
            </section>
            <section className="profile" id="profile">
                <button className="profile__avatar_button" onClick={props.onEditAvatarClick}>
                    <img src={editSign} alt="Edit Sign" className="profile__avatar_edit"></img>
                    <img
                    src={avatar}
                    alt="Avatar Image"
                    className="profile__avatar"
                    ></img>
                </button>
                <div className="profile__info">
                    <h1 className="profile__info-title">Cousteau</h1>
                    <button className="profile__info-edit-button" onClick={props.onEditProfileClick}></button>
                    <p className="profile__info-activity">Explorar</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlaceClick}></button>
            </section>
            <section className="elements" id="elements">
            <div className="card">
                <button className="card__delete-button" onClick={props.onDeleteCardClick}></button>
                <button className="card__image-link">
                    <img className="card__image" src={paisagem}/>
                </button>
                <div className="card__tag">
                    <p className="card__tag-title">Miami</p>
                    <div className="card__tag-likes">
                        <button className="card__tag-like"></button>
                        <p className="card__tag-like-count"></p>
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Main;