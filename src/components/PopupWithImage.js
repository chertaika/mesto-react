export default function PopupWithImage() {
  return (
    <div className="popup popup_type_photo-viewer">
      <div className="popup__content">
        <button className="popup__close-btn btn-hover" type="button"
                aria-label="Закрыть всплывающее окно"></button>
        <img className="popup__image" alt="Имя картинки на языке страницы" />
        <h2 className="popup__image-title">Подпись картинки</h2>
      </div>
    </div>
  );
}