class Card {
  constructor(imagePopup) {
    this._imagePopup = imagePopup;

    this._like = this._like.bind(this);
    this._remove = this._remove.bind(this);
  }

  create(title, link) {
    const newCard = `
    <div class="place-card">
        <div class="place-card__image">
            <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
            <h3 class="place-card__name"></h3>
            <button class="place-card__like-icon"></button>
        </div>
    </div>`;
    const bufferElement = document.createElement('div');
    bufferElement.insertAdjacentHTML('afterbegin', newCard);
    bufferElement.firstElementChild.querySelector('.place-card__image').style.backgroundImage = `url(${link})`;
    bufferElement.firstElementChild.querySelector('.place-card__name').textContent = title;

    this.placeCard = bufferElement.firstElementChild;

    this._likeIconElement = this.placeCard.querySelector('.place-card__like-icon');
    this._deleteIconElement = this.placeCard.querySelector('.place-card__delete-icon');
    this._cardImageElement = this.placeCard.querySelector('.place-card__image');

    this._setEventListeners();

    return this.placeCard;
  }

  _like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  _remove(event) {
    event.target.closest('.place-card').remove();
    this._removeEventListeners();
  }

  _setEventListeners() {
    this._likeIconElement.addEventListener('click', this._like);
    this._deleteIconElement.addEventListener('click', this._remove);
    this._cardImageElement.addEventListener('click', this._imagePopup.setNewPopupImage);
  }

  _removeEventListeners() {
    this.placeCard.querySelector('.place-card__like-icon').removeEventListener('click', this._like);
    this.placeCard.querySelector('.place-card__delete-icon').removeEventListener('click', this._remove);
    this.placeCard.querySelector('.place-card__image').removeEventListener('click', this._imagePopup.setNewPopupImage);
  }
}
