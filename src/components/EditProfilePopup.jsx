import { useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import useFormValidator from '../hooks/useFormValidator';

const EditProfilePopup = ({
  isOpen, onClose, onUpdateUser, buttonText,
}) => {
  const {
    inputValues, errorMessages, isValid, handleChange, resetForm, setInputValues,
  } = useFormValidator();

  const { name, about } = useContext(CurrentUserContext);

  useEffect(() => {
    setInputValues({ name, about });
  }, [isOpen, name, about]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(inputValues);
  };

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      resetForm={resetForm}
    >
      <label className="popup__field">
        <input
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          className={`popup__input ${errorMessages?.name && 'popup__input_type_error'}`}
          name="name"
          autoComplete="off"
          value={inputValues.name ?? ''}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error">{errorMessages?.name}</span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          className={`popup__input ${errorMessages?.about && 'popup__input_type_error'}`}
          name="about"
          autoComplete="off"
          value={inputValues.about ?? ''}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error">{errorMessages?.about}</span>
      </label>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
