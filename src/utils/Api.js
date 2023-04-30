import {settings} from "./constants.js";

class Api {
  constructor({baseUrl, headers}) {
    this._address = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editUserInfo({name, about}) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    }).then(this._checkResponse);
  }

  editUserAvatar({avatar}) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      })
    }).then(this._checkResponse);
  }

  addNewCard({name, link}) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    }).then(this._checkResponse);
  }

  _addLike(cardId) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers
    }).then(this._checkResponse);
  }

  _removeLike(cardId) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers
    }).then(this._checkResponse);
  }

  handleLike(cardId, isLiked) {
    if(isLiked) {
      return this._removeLike(cardId);
    } else {
      return this._addLike(cardId);
    }
  }
}

const api = new Api(settings);
export default api;
