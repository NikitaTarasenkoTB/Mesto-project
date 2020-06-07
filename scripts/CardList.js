class CardList {
  constructor(cardsContainer, card, api) {
    this._cardsContainer = cardsContainer;
    this._card = card;
    this._api = api;
    
    this._render();
  }

  addCard(card) {
    this._cardsContainer.append(card);
  }

  _render() {
    this._api.getInitialCards().then((responseData) => {
      responseData.forEach((item) => {
        const isOwn = this._api.myId === item.owner._id;
        const isLiked = item.likes.find((likeItem) => likeItem._id === this._api.myId);
        this.addCard(this._card.create(item.name, item.link, item._id, item.likes.length, isOwn, !!isLiked));
      })
    })
  }
}