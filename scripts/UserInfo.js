class UserInfo {
  constructor(userNameElement, userAboutElement, userAvatarElement, api) {
    this._userNameElement = userNameElement;
    this._userAboutElement = userAboutElement;
    this._userAvatarElement = userAvatarElement;
    this._api = api;

    this._setInitialUserInfo();
  }

  _setInitialUserInfo() {
    this._api.getUserInfo().then((responseData) => {
      this._userNameElement.textContent = responseData.name;
      this._userAboutElement.textContent = responseData.about;
      this._userAvatarElement.style.backgroundImage = `url(${responseData.avatar})`;

      this._user = responseData.name;
      this._about = responseData.about;
    });
  }

  setUserInfo(form) {
    this._user = form.elements.user.value;
    this._about = form.elements.about.value;
  }

  updateUserInfo() {
    this._userNameElement.textContent = this._user;
    this._userAboutElement.textContent = this._about;

    return this._api.updateUserInfo(this._user, this._about);
  }

  setInputUserInfo(form) {
    form.elements.user.setAttribute('value', this._user);
    form.elements.about.setAttribute('value', this._about);
  }

  setUserAvatar(avatarUrl) {
    this._userAvatarElement.style.backgroundImage = `url(${avatarUrl})`;
  }
}
