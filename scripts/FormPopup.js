class FormPopup extends Popup {
  constructor(popupElement, openButton, closeButton, userInfo, cardList, card, formValidator) {
    super(popupElement, openButton, closeButton);
    this._currentForm = popupElement.querySelector('form');
    this._userInfo = userInfo;
    this._cardList = cardList;
    this._card = card;
    this._formValidator = formValidator;

    this._formSubmit = this._formSubmit.bind(this);
    this._addFormHandler = this._addFormHandler.bind(this);
    this._editFormHandler  = this._editFormHandler.bind(this);
    
    this._setEventListeners();
  }

  _open() {
    super._open();
    this._resetForm();
    if(this._currentForm.name === 'edit') {
      this._userInfo.setInputUserInfo(this._currentForm);
      this._formValidator.setSubmitButtonState(this._currentForm, true);
    } else {
      this._formValidator.setSubmitButtonState(this._currentForm, false);
    }
    this._formValidator.setInputVAlidityListeners(this._currentForm);
  }

  _close() {
    super._close();
    this._formValidator.removeInputVAlidityListeners(this._currentForm);
  }

  _editFormHandler() {
    this._userInfo.setUserInfo(this._currentForm);
    this._userInfo.updateUserInfo();
  }

  _addFormHandler() {
    const title = this._currentForm.elements.title.value;
    const link = this._currentForm.elements.link.value;
    this._cardList.addCard(this._card.create(title, link));
  }

  _formSubmit(event) {
    event.preventDefault();
    this._currentForm.name === 'edit' ? this._editFormHandler() : this._addFormHandler();
    this._close();
  }

  _resetForm() {
    this._currentForm.reset();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._currentForm.addEventListener('submit', this._formSubmit);
  }
}