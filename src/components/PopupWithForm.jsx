import { useEffect } from 'react';

const PopupWithForm = ({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
}) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form popup__form_card"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button className="popup__submit-btn" type="submit">
            {buttonText}
          </button>
        </form>
        <button
          className="{popup__close-btn btn-hover}"
          onMouseDown={onClose}
          type="button"
          aria-label="Закрыть всплывающее окно"
        />
      </div>
    </div>
  );
};

export default PopupWithForm;
