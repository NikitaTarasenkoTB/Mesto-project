class CardList {
  constructor(cardsContainer, initialArr, card) {
    this._cardsContainer = cardsContainer;
    this._initialArr = initialArr;
    this._card = card;
    
    this._render();
  }

  addCard(card) {
    this._cardsContainer.append(card);
  }

  _render() {
    this._initialArr.forEach(item => {
      this.addCard(this._card.create(item.name, item.link));
    });
  }
}