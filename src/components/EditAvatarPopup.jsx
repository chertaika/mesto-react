import PopupWithForm from './PopupWithForm';
import useFormValidator from '../hooks/useFormValidator';

const EditAvatarPopup = ({
  isOpen, onClose, onUpdateAvatar, buttonText,
}) => {
  const {
    inputValues, errorMessages, isValid, handleChange, resetForm,
  } = useFormValidator();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar(inputValues);
  };

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      resetForm={resetForm}
    >
      <label className="popup__field">
        <input
          type="url"
          placeholder="Ссылка на картинку"
          id="avatar-input"
          className={`popup__input popup__input_type_avatar ${errorMessages?.avatar && 'popup__input_type_error'}`}
          name="avatar"
          autoComplete="off"
          value={inputValues.avatar ?? ''}
          required
          onChange={handleChange}
        />
        <span className="popup__input-error avatar-input-error">{errorMessages?.avatar}</span>
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
