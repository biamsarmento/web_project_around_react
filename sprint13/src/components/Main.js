import avatar from '../images/Avatar.png';
import editSign from '../images/EditSign.png';

// const content = document.querySelector(".content");
// const editButton = content.querySelector(".profile__info-edit-button");
// export const popup = content.querySelector(".profile-popup");
// const newCard = content.querySelector(".profile__add-button");
// const elements = ".elements";
// const editProfilePicButton = content.querySelector(".profile__avatar_button");

function handleEditAvatarClick() {
    document.querySelector(".edit-profile-pic-popup").classList.add("edit-profile-pic-popup_opened");
}

function handleEditProfileClick() {
    document.querySelector(".profile-popup").classList.add("profile-popup_opened");
}

function handleAddPlaceClick() {
    document.querySelector(".new-card-popup").classList.add("new-card-popup_opened");
}

function Main() {
    return (
        <main className="content">
            <section className="profile-popup" id="profile-popup">
                <div className="profile-popup__container">
                    <button className="profile-popup__close-button"></button>
                    <h2 className="profile-popup__title">Editar Perfil</h2>
                    <form className="profile-popup__form form" name="formPopup" noValidate>
                    <fieldset className="form__fieldset">
                        <input type="text" className="form__input form__input_type_name" id="nome" name="name" defaultValue="Jacques Cousteau" minLength="2" maxLength="40" required></input>
                        <span className="form__input-error nome-error"></span>
                        <input type="text" className="form__input form__input_type_activity" id="atividade" name="about" defaultValue="Explorar" minLength="2" maxLength="200" required></input>
                        <span className="form__input-error atividade-error"></span>
                        <button type="submit" className="form__submit-button">Salvar</button>
                    </fieldset>
                    </form>
                </div>
            </section>
            <section className="new-card-popup" id="new-card-popup">
                <div className="new-card-popup__container">
                    <button className="new-card-popup__close-button"></button>
                    <h2 className="new-card-popup__title">Novo local</h2>
                    <form className="new-card-popup__form form" name="formNewCard" noValidate>
                    <fieldset className="form__fieldset">
                        <input type="text" className="form__input form__input_type_title" id="titulo" name="name" placeholder="Title" minLength="2" maxLength="30" required></input>
                        <span className="form__input-error titulo-error"></span>
                        <input type="url" className="form__input form__input_type_url" id="url" name="link" placeholder="Image URL" required></input>
                        <span className="form__input-error url-error"></span>
                        <button type="submit" className="form__submit-button">Salvar</button>
                    </fieldset>
                    </form>
                </div>
            </section>
            <section className="delete-popup" id="delete-popup">
                <div className="delete-popup__container">
                    <button className="delete-popup__close-button"></button>
                    <h2 className="delete-popup__title">Tem certeza?</h2>
                    <form className="delete-popup__form form" name="formDelete" noValidate>
                    <fieldset className="form__fieldset">
                        <button type="submit" className="form__submit-button">Sim</button>
                    </fieldset>
                    </form>
                </div>
            </section>
            <section className="edit-profile-pic-popup" id="edit-profile-pic-popup">
                <div className="edit-profile-pic-popup__container">
                    <button className="edit-profile-pic-popup__close-button"></button>
                    <h2 className="edit-profile-pic-popup__title">Alterar a foto do perfil</h2>
                    <form className="edit-profile-pic-popup__form form" name="formEditProfilePic" noValidate>
                    <fieldset className="form__fieldset">
                        <input type="url" className="form__input form__input_type_url" id="url" name="linkEditProfilePic" placeholder="https://somewebsite.com/someimage.jpg" required></input>
                        <span className="form__input-error url-error"></span>
                        <button type="submit" className="form__submit-button">Salvar</button>
                    </fieldset>
                    </form>
                </div>
            </section>
            <section className="image-popup" id="image-popup">
                <div className="image-popup__container">
                    <img className="image-popup__picture"></img>
                    <p className="image-popup__title"></p>
                    <button className="image-popup__close-button"></button>
                </div>
            </section>
            <section className="profile" id="profile">
                <button className="profile__avatar_button" onClick={handleEditAvatarClick}>
                    <img src={editSign} alt="Edit Sign" className="profile__avatar_edit"></img>
                    <img
                    src={avatar}
                    alt="Avatar Image"
                    className="profile__avatar"
                    ></img>
                </button>
                <div className="profile__info">
                    <h1 className="profile__info-title">Cousteau</h1>
                    <button className="profile__info-edit-button" onClick={handleEditProfileClick}></button>
                    <p className="profile__info-activity">Explorar</p>
                </div>
                <button className="profile__add-button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="elements" id="elements">
            </section>
        </main>
    )
}

export default Main;