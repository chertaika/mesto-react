import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import Preloader from './Preloader';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithConfirmation from './PopupWithConfirmation';

const App = () => {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [deletedCard, setDeletedCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [buttonTextEditPopup, setButtonTextEditPopup] = useState('Сохранить');
  const [buttonTextAddPopup, setButtonTextAddPopup] = useState('Создать');
  const [buttonTextConfirmPopup, setButtonTextConfirmPopup] = useState('Да');

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardDelete = (card) => {
    setDeletedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
    setDeletedCard(null);
  };

  const checkLoading = () => {
    setIsLoading(false);
  };

  const handleCardLike = (currentCardId, isLiked) => {
    api.handleLike(currentCardId, isLiked)
      .then((newCard) => {
        setCards(cards.map(card => (card._id === currentCardId ? newCard : card)));
      })
      .catch(error => console.log(`Ошибка: ${error}`));
  };

  const handleConfirmationOfDelete = () => {
    setButtonTextConfirmPopup('Сохранение...');
    api.deleteCard(deletedCard._id)
      .then(() => {
        setCards(cards.filter(card => card._id !== deletedCard._id));
        closeAllPopups();
      })
      .catch(error => console.log(`Ошибка: ${error}`))
      .finally(() => setButtonTextConfirmPopup('Да'));
  };

  const handleAddPlaceSubmit = (card) => {
    setButtonTextAddPopup('Создание...');
    api.addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(error => console.log(`Ошибка: ${error}`))
      .finally(() => setButtonTextAddPopup('Создать'));
  };

  const handleUpdateUser = (data) => {
    setButtonTextEditPopup('Сохранение...');
    api.editUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(error => console.log(`Ошибка: ${error}`))
      .finally(() => setButtonTextEditPopup('Сохранить'));
  };

  const handleUpdateAvatar = (data) => {
    setButtonTextEditPopup('Сохранение...');
    api.editUserAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(error => console.log(`Ошибка: ${error}`))
      .finally(() => setButtonTextEditPopup('Сохранить'));
  };

  useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .then(() => checkLoading())
      .catch(error => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {isLoading && (
          <Preloader size="large" />
        )}
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={buttonTextEditPopup}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText={buttonTextEditPopup}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText={buttonTextAddPopup}
        />

        <PopupWithConfirmation
          isOpen={deletedCard}
          onClose={closeAllPopups}
          onConfirm={handleConfirmationOfDelete}
          buttonText={buttonTextConfirmPopup}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
