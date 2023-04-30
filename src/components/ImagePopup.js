export default function ImagePopup({card, onClose}) {
  return (
    <div
      className={`popup popup_type_photo-viewer ${card && 'popup_opened'}`}>
      <div className="popup__content">
        <button className="popup__close-btn btn-hover"
                onClick={onClose}
                type="button"
                aria-label="Закрыть всплывающее окно"/>
        <img className="popup__image" src={card ? card.link : '#'}
             alt={card ? card.name : "Имя картинки на языке страницы"}/>
        <h2
          className="popup__image-title">{card ? card.name : "Имя картинки на языке страницы"}</h2>
      </div>
    </div>
  );
}