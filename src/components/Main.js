import {useState, useEffect} from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch(error => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="фото профиля"/>
          <div className="profile__avatar-edit"
               onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__desc">{userDescription}</p>
          <button className="profile__edit-btn btn-hover"
                  onClick={onEditProfile} type="button"
                  aria-label="Редактировать профиль"></button>
        </div>
        <button className="profile__add-btn btn-hover"
                onClick={onAddPlace} type="button"
                aria-label="Добавить карточку"></button>
      </section>
      <section className="elements" aria-label="Впечатляющие места России">
        {cards.map(card => (
          <Card card={card} key={card._id} onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
  );
}