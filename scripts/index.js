/*
const $modalProfile = document.querySelector('#modal-profile');
const $modalAddCard = document.querySelector('#modal-addCard');
const $modalImage = document.querySelector('#modal-Image');
const $editBtn = document.querySelector('#editProfile');
const $addCardBtn = document.querySelector('#addCard');
const $popup = document.querySelectorAll('.popup');

function openPopup(popupId) {
  popupId.classList.add('popup_opened');
};

$editBtn.addEventListener('click', () => {  
  $inputName.setAttribute('value', $profileName.textContent);
  $inputJob.setAttribute('value', $profileJob.textContent);
  openPopup($modalProfile);
});

$addCardBtn.addEventListener('click', () => {
  openPopup($modalAddCard);
});

function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
};

$closeBtn = document.querySelectorAll('.popup__close-button');
$closeBtn.forEach(function(el) {
  el.addEventListener('click', () => {
    closePopup(el.closest('.popup'));
  });
});

$popup.forEach(function(el) {
  window.addEventListener('keydown', function(evt) {
    if(evt.key === 'Escape') {
      closePopup(el.closest('.popup'));
    }
  });
  el.addEventListener('click', function(evt) {
    if(evt.target === el) {
      closePopup(el.closest('.popup'));
    }    
  });
});


const $formProfile = document.forms['profile-form'];
const $inputName = $formProfile.elements['name'];
const $inputJob = $formProfile.elements['job'];
const $profileName = document.querySelector('.profile__title');
const $profileJob = document.querySelector('.profile__subtitle');

function submitFormProfile (evt) {
  evt.preventDefault();
  
  $profileName.textContent = $inputName.value;
  $profileJob.textContent = $inputJob.value;    
  closePopup($modalProfile);  
  evt.target.reset();  
};

$formProfile.addEventListener('submit', submitFormProfile);

const cardTemplate = document.querySelector('#card-template').content;
const $cardsContainer = document.querySelector('.cards');
function addCard (cardImg , cardTitle) {  
  const $cardElement = cardTemplate.querySelector('.card').cloneNode(true);   
  $cardElement.querySelector('.card__title').textContent = cardTitle;
  $cardElement.querySelector('.card__image').setAttribute('src', cardImg);
  $cardElement.querySelector('.card__image').setAttribute('alt', cardTitle);
  $cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  $cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    openPopup($modalImage);    
    document.querySelector('.popup__image').setAttribute('src', cardImg);
    document.querySelector('.popup__image').setAttribute('alt', cardTitle);
    document.querySelector('.popup__image-caption').textContent = cardTitle;
  });
  $cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {      
    evt.target.closest('.card').remove();
    }); 
  return $cardElement;   
};

const $formAddCard = document.forms['addCard-form'];
const $inputTitle = $formAddCard.elements['profile__title'];
const $inputImgLink = $formAddCard.elements['profile__subtitle'];
function submitAddCard (evt) {
  evt.preventDefault();
 
  $newCard = addCard($inputImgLink.value, $inputTitle.value);
  $cardsContainer.prepend($newCard);
  closePopup($modalAddCard);
  evt.target.reset();      
};

$formAddCard.addEventListener('submit', submitAddCard);

$initialCards.forEach(function(el) {
  $cardElement = addCard(el.link , el.name);
  $cardsContainer.prepend($cardElement);    
});

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if(!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement)
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled')
    buttonElement.disabled = true
  } else {
    buttonElement.classList.remove('popup__button_disabled')
    buttonElement.disabled = false
  };
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });    
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {    
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};


enableValidation();

*/

import {openPopup, closePopup} from '../components/modal.js';
import {setInputProfile, submitFormProfile} from '../components/forms.js';

const $editBtn = document.querySelector('#editProfile');
const $formProfile = document.forms['profile-form'];
const $modalProfile = document.querySelector('#modal-profile');
$editBtn.addEventListener('click', () => {  
  setInputProfile();
  openPopup($modalProfile);
});
$formProfile.addEventListener('submit', submitFormProfile);


const $addCardBtn = document.querySelector('#addCard');
const $modalAddCard = document.querySelector('#modal-addCard');
$addCardBtn.addEventListener('click', () => {
  openPopup($modalAddCard);
});

const $closeBtn = document.querySelectorAll('.popup__close-button');
$closeBtn.forEach(function(el) {
  el.addEventListener('click', () => {
    closePopup(el.closest('.popup'));
  });
});

import {$initialCards, addCard} from '../components/card.js';

const $formAddCard = document.forms['addCard-form'];
const $inputTitle = $formAddCard.elements['profile__title'];
const $inputImgLink = $formAddCard.elements['profile__subtitle'];
function submitAddCard (evt) {
  evt.preventDefault(); 
  const $newCard = addCard($inputImgLink.value, $inputTitle.value);
  $cardsContainer.prepend($newCard);
  closePopup($modalAddCard);
  evt.target.reset();      
};

$formAddCard.addEventListener('submit', submitAddCard);

const $cardsContainer = document.querySelector('.cards');
$initialCards.forEach(function(el) {
  const $cardElement = addCard(el.link , el.name);
  $cardsContainer.prepend($cardElement);    
});


import {enableValidation} from '../components/validate.js';

enableValidation();



  