const editBtn = document.querySelector('#editProfile');
const modalProfile = document.querySelector('#modal-profile');
const addCardBtn = document.querySelector('#addCard');
const modalAddCard = document.querySelector('#modal-addCard');
const avatarBtn = document.querySelector('#editAvatar');
const modalAvatar = document.querySelector('#modal-avatar');

const closeBtn = document.querySelectorAll('.popup__close-button');
const cardsContainer = document.querySelector('.cards');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar')

const formProfile = document.forms['profile-form'];
const formAddCard = document.forms['addCard-form'];
const formAvatar = document.forms['avatar-form'];
const inputName = formProfile.elements['name'];
const inputJob = formProfile.elements['job'];
const inputTitle = formAddCard.elements['place-name'];
const inputImgLink = formAddCard.elements['url-link'];
const inputAvatarLink = formAvatar.elements['url-link'];

 

export {editBtn, formProfile, modalProfile, addCardBtn, modalAddCard, closeBtn, formAddCard, avatarBtn, modalAvatar, inputName, inputJob, inputTitle, inputImgLink, formAvatar, inputAvatarLink, profileName, profileJob, profileAvatar, cardsContainer, popupImage, popupImageCaption }