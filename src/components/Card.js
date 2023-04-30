export default function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <img className="card__photo" alt={card.name} src={card.link}
           onClick={handleCardClick}/>
      <button className="card__delete-btn btn-hover" type="button"
              aria-label="Удалить карточку"/>
      <div className="card__desc">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="card__like-button" type="button"
                  aria-label="Поставить лайк"/>
          <span className="card__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}