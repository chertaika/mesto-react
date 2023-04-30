export default function PopupWithImage({card, onClose}) {
  return (
    <div
      className={`popup popup_type_photo-viewer` + (card !== null && ' popup_opened')}>
      <div className="popup__content">
        <button className="popup__close-btn btn-hover"
                onClick={onClose}
                type="button"
                aria-label="Закрыть всплывающее окно"/>
        <img className="popup__image" src={card !== null ? card.link : '#'}
             alt={card !== null ? card.name : "Имя картинки на языке страницы"}/>
        <h2
          className="popup__image-title">{card !== null ? card.name : "Подпись картинки"}</h2>
      </div>
    </div>
  );
}