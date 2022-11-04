const editBtn = document.querySelector('#editProfile');
const formProfile = document.forms['profile-form'];
const modalProfile = document.querySelector('#modal-profile');
const addCardBtn = document.querySelector('#addCard');
const modalAddCard = document.querySelector('#modal-addCard');
const closeBtn = document.querySelectorAll('.popup__close-button');
const formAddCard = document.forms['addCard-form'];
const cardsContainer = document.querySelector('.cards');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

const inputName = formProfile.elements['name'];
const inputJob = formProfile.elements['job'];
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

export {editBtn, formProfile, modalProfile, addCardBtn, modalAddCard, closeBtn, formAddCard, inputName, inputJob, profileName, profileJob, initialCards, cardsContainer, popupImage, popupImageCaption}