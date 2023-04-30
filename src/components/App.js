import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

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
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />

      <PopupWithForm name={`edit-profile`} title={`Редактировать профиль`} buttonText={'Сохранить'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" placeholder="Имя" id="name-input" minLength="2"
                 maxLength="40"
                 className="popup__input popup__input_type_name" name="name"
                 autoComplete="off" required />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="text" placeholder="О себе" id="desc-input"
                 minLength="2" maxLength="200"
                 className="popup__input popup__input_type_desc"
                 name="about" autoComplete="off" required />
          <span className="popup__input-error desc-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'add-card'} title={'Новое место'} buttonText={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" placeholder="Название" id="title-input"
                 minLength="2" maxLength="30"
                 className="popup__input popup__input_type_title"
                 name="name" autoComplete="off" required />
          <span className="popup__input-error title-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="url" placeholder="Ссылка на картинку" id="link-input"
                 className="popup__input popup__input_type_link"
                 name="link" autoComplete="off" required />
          <span className="popup__input-error link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithImage />

      <PopupWithForm name={'edit-avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="url" placeholder="Ссылка на картинку"
                 id="avatar-input"
                 className="popup__input popup__input_type_avatar"
                 name="avatar" autoComplete="off" required />
          <span className="popup__input-error avatar-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name={'delete-card'} title={'Вы уверены?'} buttonText={'Да'} onClose={closeAllPopups} />
    </div>
  );
}
