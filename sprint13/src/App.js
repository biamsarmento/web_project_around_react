import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
// import { useEffect } from 'react';
import './index.css';
import api from './utils/api';
import CurrentUserContext from './contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState('');
  // const [popup, setPopup] = React.useState(false);

  // React.useEffect(() => {
  //   api.getUserInfo()
  //   .then((result) => {
  //       setCurrentUser(result);
  //   })
  //   .catch((err) => {
  //       console.error("Erro ao obter Usrr Info:", err);
  //   });
  // }, []);

  React.useEffect(() => {
    (async () => {
      await api.getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.error("Erro ao obter Usrr Info:", err);
        });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.editProfile(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  function handleUpdateAvatar(avatar) {
    api.editProfilePicture(avatar)
      .then((newUserData) => {
        setCurrentUser(newUserData); 
      })
      .catch((err) => console.error(err));
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleDeleteCardClick() {
    setDeleteCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setSelectedCard(null);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setDeleteCardPopupOpen(false);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
        <Header></Header>
        <Main 
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onDeleteCardClick={handleDeleteCardClick}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          isDeleteCardPopupOpen={isDeleteCardPopupOpen}
          selectedCard={selectedCard}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}

          // onOpenPopup={handleOpenPopup}
          // onClosePopup={handleClosePopup}
          // popup={popup}
        ></Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
