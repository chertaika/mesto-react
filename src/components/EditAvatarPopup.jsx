import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          type="url"
          placeholder="Ссылка на картинку"
          id="avatar-input"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          autoComplete="off"
          ref={avatarRef}
          required
        />
        <span className="popup__input-error avatar-input-error" />
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
