import './pages/index.css';

import {editBtn, formProfile, modalProfile, addCardBtn, modalAddCard, closeBtn, formAddCard, initialCards, cardsContainer} from './components/utils.js';
import {openPopup, closePopup} from './components/modal.js';
import {setInputProfile, submitFormProfile, submitAddCard} from './components/forms.js';

import {addCard} from './components/card.js';

editBtn.addEventListener('click', () => {  
  setInputProfile();
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


initialCards.forEach(function(el) {
  const cardElement = addCard(el.link , el.name);
  cardsContainer.prepend(cardElement);    
});


import {enableValidation} from './components/validate.js';

enableValidation();



  