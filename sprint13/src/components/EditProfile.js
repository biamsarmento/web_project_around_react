import { useState, useContext, useEffect } from 'react'; 
import CurrentUserContext from '../contexts/CurrentUserContext'; 

export default function EditProfile(props) {
//   const currentUser = useContext(CurrentUserContext); // Obtém o objeto de usuário atual
  const userContext = useContext(CurrentUserContext); // Obtém o objeto de usuário atual
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name); // Atualiza o estado com o nome atual do usuário
      setDescription(currentUser.about); // Atualiza o estado com a descrição atual do usuário
    }
  }, [currentUser]); 

  const handleNameChange = (event) => {
    setName(event.target.value); 
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    handleUpdateUser({ name, about: description }); 
    props.onClose();
  };

  return (
    <form 
    className="profile-popup__form form" 
    name="formPopup"
    id="profile-popup__form" 
    onSubmit={handleSubmit}
    noValidate>
        <fieldset
        className="form__fieldset">
            <input 
            type="text" 
            className="form__input form__input_type_name" 
            id="nome" 
            name="name"
            minLength="2" 
            maxLength="40" 
            value={name} // Bind name to input
            onChange={handleNameChange} // Add onChange handler
            required />
            <span className="form__input-error nome-error"></span>
            <input 
            type="text" 
            className="form__input form__input_type_activity" 
            id="atividade" 
            name="about" 
            minLength="2" 
            maxLength="200"
            value={description} // Bind description to input
            onChange={handleDescriptionChange} // Add onChange handler 
            required />
            <span className="form__input-error atividade-error"></span>
            <button type="submit" className="form__submit-button">Salvar</button>
        </fieldset>
    </form>
  );
}