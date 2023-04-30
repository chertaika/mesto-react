import {useState} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header/>
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}/>
      <Footer/>

      <PopupWithForm name={`edit-profile`} title={`Редактировать профиль`}
                     buttonText={'Сохранить'} isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" placeholder="Имя" id="name-input" minLength="2"
                 maxLength="40"
                 className="popup__input popup__input_type_name" name="name"
                 autoComplete="off" required/>
          <span className="popup__input-error name-input-error"/>
        </label>
        <label className="popup__field">
          <input type="text" placeholder="О себе" id="desc-input"
                 minLength="2" maxLength="200"
                 className="popup__input popup__input_type_desc"
                 name="about" autoComplete="off" required/>
          <span className="popup__input-error desc-input-error"/>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'add-card'} title={'Новое место'}
                     buttonText={'Создать'} isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" placeholder="Название" id="title-input"
                 minLength="2" maxLength="30"
                 className="popup__input popup__input_type_title"
                 name="name" autoComplete="off" required/>
          <span className="popup__input-error title-input-error"/>
        </label>
        <label className="popup__field">
          <input type="url" placeholder="Ссылка на картинку" id="link-input"
                 className="popup__input popup__input_type_link"
                 name="link" autoComplete="off" required/>
          <span className="popup__input-error link-input-error"/>
        </label>
      </PopupWithForm>

      <PopupWithImage card={selectedCard} onClose={closeAllPopups}/>

      <PopupWithForm name={'edit-avatar'} title={'Обновить аватар'}
                     buttonText={'Сохранить'} isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="url" placeholder="Ссылка на картинку"
                 id="avatar-input"
                 className="popup__input popup__input_type_avatar"
                 name="avatar" autoComplete="off" required/>
          <span className="popup__input-error avatar-input-error"/>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'delete-card'} title={'Вы уверены?'}
                     buttonText={'Да'} onClose={closeAllPopups}/>
    </div>
  );
}
