import {
  useContext, useState, useEffect,
} from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [[name, about], setUserData] = useState(['', '']);

  const { name: currentUserName, about: currentUserDescription } = useContext(CurrentUserContext);

  useEffect(() => {
    setUserData([currentUserName, currentUserDescription]);
  }, [currentUserName, currentUserDescription]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({ name, about });
  };

  const handleChangeName = (evt) => {
    setUserData([evt.target.value, about]);
  };

  const handleChangeDescription = (evt) => {
    setUserData([name, evt.target.value]);
  };

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          placeholder="Имя"
          id="name-input"
          minLength="2"
          maxLength="40"
          className="popup__input popup__input_type_name"
          name="name"
          autoComplete="off"
          value={name ?? ''}
          onChange={handleChangeName}
          required
        />
        <span className="popup__input-error name-input-error" />
      </label>
      <label className="popup__field">
        <input
          type="text"
          placeholder="О себе"
          id="desc-input"
          minLength="2"
          maxLength="200"
          className="popup__input popup__input_type_desc"
          name="about"
          autoComplete="off"
          value={about ?? ''}
          onChange={handleChangeDescription}
          required
        />
        <span className="popup__input-error desc-input-error" />
      </label>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
