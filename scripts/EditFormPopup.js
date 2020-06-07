class EditFormPopup extends FormPopup {
  constructor(popupElement, openButton, closeButton, formValidator, api, userInfo) {
    super(popupElement, openButton, closeButton, formValidator, api);
    this._userInfo = userInfo;

    this._editFormHandler = this._editFormHandler.bind(this);
    this._setEventListeners();
  }

  _open() {
    super._open();
    this._userInfo.setInputUserInfo(this._currentForm);
    this._formValidator.setSubmitButtonState(this._currentForm, true);
  }

  _editFormHandler(event) {
    event.preventDefault();
    this._userInfo.setUserInfo(this._currentForm);

    this._loadingButtonState()
    this._userInfo.updateUserInfo()
    .finally(() => {
      this._close();
      this._loadedButtonState();
    });
  }

  _setEventListeners() {
    super._setEventListeners();
    this._currentForm.addEventListener('submit', this._editFormHandler);
  }
}