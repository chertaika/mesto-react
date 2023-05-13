import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const nameInputRef = useRef(null);
  const linkInputRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({
      name: nameInputRef.current.value,
      link: linkInputRef.current.value,
    });
  };

  useEffect(() => {
    nameInputRef.current.value = '';
    linkInputRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="text"
          placeholder="Название"
          id="title-input"
          minLength="2"
          maxLength="30"
          className="popup__input popup__input_type_title"
          name="name"
          autoComplete="off"
          ref={nameInputRef}
          required
        />
        <span className="popup__input-error title-input-error" />
      </label>
      <label className="popup__field">
        <input
          type="url"
          placeholder="Ссылка на картинку"
          id="link-input"
          className="popup__input popup__input_type_link"
          name="link"
          autoComplete="off"
          ref={linkInputRef}
          required
        />
        <span className="popup__input-error link-input-error" />
      </label>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
