import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import './index.css';
import api from './utils/api';
import CurrentUserContext from './contexts/CurrentUserContext';

function App() {

  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState('');

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
      api.getInitialCards()
        .then((result) => {
          setCards(result); 
        })
        .catch((err) => {
          console.error("Erro ao obter cartões iniciais:", err);
        });
  }, []);

  // CARD

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

  function handleAddPlaceSubmit(card) {
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
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
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit}}>
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        ></Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
