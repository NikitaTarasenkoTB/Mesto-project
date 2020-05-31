class UserInfo {
  constructor(userNameElement, userAboutElement) {
    this._userNameElement = userNameElement;
    this._userAboutElement = userAboutElement;
    this._user = userNameElement.textContent;
    this._about = userAboutElement.textContent;
  }

  setUserInfo(form) {
    this._user = form.elements.user.value;
    this._about = form.elements.about.value;
  }

  updateUserInfo() {
    this._userNameElement.textContent = this._user;
    this._userAboutElement.textContent = this._about;

  }

  setInputUserInfo(form) {
    form.elements.user.setAttribute('value', this._user);
    form.elements.about.setAttribute('value', this._about);
  }
}
