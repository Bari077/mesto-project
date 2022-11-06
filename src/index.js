import './pages/index.css';

import {editBtn, formProfile, modalProfile, addCardBtn, modalAddCard, closeBtn, inputName, inputJob, profileName, profileJob, formAddCard, initialCards, cardsContainer} from './components/global.js';
import { openPopup, closePopup } from './components/modal.js';
import { setInitialInput, saveInputValue, disableButton } from './components/utils.js';
import { addCard } from './components/card.js';
import { enableValidation } from './components/validate.js';
import {getInitialCards, getMyProfile} from './components/api.js';
import { data } from 'autoprefixer';


function submitFormProfile (evt) {
  evt.preventDefault();
  saveInputValue(inputName, profileName);
  saveInputValue(inputJob, profileJob);   
  closePopup(modalProfile);  
  evt.target.reset();  
};

function submitAddCard (evt) {
  const inputTitle = formAddCard.elements['place-name'];
  const inputImgLink = formAddCard.elements['url-link'];
  const submitButton = formAddCard.elements['form__submit']; 
  evt.preventDefault(); 
  const newCard = addCard(inputImgLink.value, inputTitle.value);
  cardsContainer.prepend(newCard);
  disableButton(submitButton, 'popup__button_disabled');
  closePopup(modalAddCard);
  evt.target.reset();      
};


editBtn.addEventListener('click', () => { 
  setInitialInput(inputName, profileName);
  setInitialInput(inputJob, profileJob);
  openPopup(modalProfile);
});

formProfile.addEventListener('submit', submitFormProfile);

addCardBtn.addEventListener('click', () => {
  openPopup(modalAddCard);
});

closeBtn.forEach(function(el) {
  el.addEventListener('click', () => {
    closePopup(el.closest('.popup'));
  });
});

formAddCard.addEventListener('submit', submitAddCard);


/*initialCards.forEach(function(el) {
  const cardElement = addCard(el.link , el.name);
  cardsContainer.prepend(cardElement);    
});*/


function loadCards () {
  getInitialCards().then(data => {
    data.forEach(card => {
      const cardElement = addCard(card.link , card.name);
      cardsContainer.prepend(cardElement);
    }) 
  })   
}

getMyProfile();
loadCards();
enableValidation();





  