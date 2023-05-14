import PopupWithForm from './PopupWithForm';
import useFormValidator from '../hooks/useFormValidator';

const AddPlacePopup = ({
  isOpen, onClose, onAddPlace, buttonText,
}) => {
  const {
    inputValues, errorMessages, isValid, handleChange, resetForm,
  } = useFormValidator();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace(inputValues);
  };

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
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
          placeholder="Название"
          id="title-input"
          minLength="2"
          maxLength="30"
          className={`popup__input popup__input_type_title ${errorMessages?.name && 'popup__input_type_error'}`}
          name="name"
          autoComplete="off"
          required
          value={inputValues.name ?? ''}
          onChange={handleChange}
        />
        <span className="popup__input-error title-input-error">{errorMessages?.name}</span>
      </label>
      <label className="popup__field">
        <input
          type="url"
          placeholder="Ссылка на картинку"
          id="link-input"
          className={`popup__input popup__input_type_link ${errorMessages?.link && 'popup__input_type_error'}`}
          name="link"
          autoComplete="off"
          required
          value={inputValues.link ?? ''}
          onChange={handleChange}
        />
        <span className="popup__input-error link-input-error">{errorMessages?.link}</span>
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
