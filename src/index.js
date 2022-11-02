import './pages/index.css';

import {openPopup, closePopup} from './components/modal.js';
import {setInputProfile, submitFormProfile} from './components/forms.js';

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

import {$initialCards, addCard} from './components/card.js';

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


import {enableValidation} from './components/validate.js';

enableValidation();



  