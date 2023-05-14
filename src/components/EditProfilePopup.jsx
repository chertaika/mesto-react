import { useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import useFormValidator from '../hooks/useFormValidator';

const EditProfilePopup = ({
  isOpen, onClose, onUpdateUser, buttonText,
}) => {
  // const {
  //   inputValues, errorMessages, isValid, handleChange, resetForm, setInputValues,
  // } = useFormValidator();
  //
  // const { name, about } = useContext(CurrentUserContext);
  //
  // useEffect(() => {
  //   setInputValues({ name, about });
  // }, [isOpen, name, about]);

  const {
    name: currentUserName,
    about: currentUserDescription,
  } = useContext(CurrentUserContext);

  const {
    inputValues, errorMessages, isValid, handleChange, resetForm,
  } = useFormValidator({
    name: currentUserName,
    about: currentUserDescription,
  });

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
          id="name-input"
          minLength="2"
          maxLength="40"
          className={`popup__input popup__input_type_name ${errorMessages?.name && 'popup__input_type_error'}`}
          name="name"
          autoComplete="off"
          defaultValue={inputValues.name || currentUserName}
          // value={inputValues.name ?? ''}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error name-input-error">{errorMessages?.name}</span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          placeholder="О себе"
          id="desc-input"
          minLength="2"
          maxLength="200"
          className={`popup__input popup__input_type_desc ${errorMessages?.about && 'popup__input_type_error'}`}
          name="about"
          autoComplete="off"
          defaultValue={inputValues.about || currentUserDescription}
          // value={inputValues.about ?? ''}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error desc-input-error">{errorMessages?.about}</span>
      </label>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
