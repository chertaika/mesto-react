import { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

const Main = ({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) => {
  const { name, about, avatar } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={avatar} alt="фото профиля" />
          <div
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <p className="profile__desc">{about}</p>
          <button
            className="profile__edit-btn btn-hover"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактировать профиль"
          />
        </div>
        <button
          className="profile__add-btn btn-hover"
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить карточку"
        />
      </section>
      <section className="elements" aria-label="Впечатляющие места России">
        {cards.map(card => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
