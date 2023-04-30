export default function PopupWithForm ({name, title, buttonText, isOpen, onClose, children}) {
  return (
    <div className={`popup popup_type_${name}` + (isOpen && ' popup_opened')}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form popup__form_card" name={name} noValidate>
          {children}
          <button className="popup__submit-btn" type="submit">
            {buttonText}
          </button>
        </form>
        <button className="popup__close-btn btn-hover" onClick={onClose} type="button"
                aria-label="Закрыть всплывающее окно"/>
      </div>
    </div>
  );
}