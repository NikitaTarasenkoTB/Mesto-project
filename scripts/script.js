const [popupAdd, popupEdit, popupImage] = document.querySelectorAll('.popup');
const addButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__edit-button');
const [closeButton, closeButtonEdit, closeButtonImage] = document.querySelectorAll('.popup__close');
const placesList = document.querySelector('.places-list');
const userNameElement = document.querySelector('.user-info__name');
const userAboutElement = document.querySelector('.user-info__job');

const imagePopup = new ImagePopup(popupImage, closeButtonImage);
const card = new Card(imagePopup);
const cardList = new CardList(placesList, initialArr, card);
const userInfo = new UserInfo(userNameElement, userAboutElement);
const formValidator = new FormValidator();

new FormPopup(popupAdd, addButton, closeButton, userInfo, cardList, card, formValidator);
new FormPopup(popupEdit, editButton, closeButtonEdit, userInfo, cardList, card, formValidator);
