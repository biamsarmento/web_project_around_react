import { useRef, useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function EditAvatar(props) {
  const avatarRef = useRef(); 
  const userContext = useContext(CurrentUserContext); 
  const { handleUpdateAvatar } = userContext; 

  function handleSubmit(e) {
    e.preventDefault();
  
    handleUpdateAvatar({
        avatar: avatarRef.current.value,
    });
    props.onClose();
  }

  return (
    <form className="edit-profile-pic-popup__form form" onSubmit={handleSubmit} noValidate>
      <fieldset className="form__fieldset">
        <input
          type="url"
          className="form__input form__input_type_url"
          id="url"
          name="linkEditProfilePic"
          placeholder="https://somewebsite.com/someimage.jpg"
          ref={avatarRef} 
          required
        />
        <span className="form__input-error url-error"></span>
        <button type="submit" className="form__submit-button">Salvar</button>
      </fieldset>
    </form>
  );
}
