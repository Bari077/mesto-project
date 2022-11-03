import { closePopup } from "./modal.js";
import {formAddCard, cardsContainer, modalProfile, modalAddCard, inputName, inputJob, profileName, profileJob} from './utils.js';
import {addCard} from './card.js';
import {disableButton} from './validate.js'


function setInputProfile () {
  inputName.setAttribute('value', profileName.textContent);
  inputJob.setAttribute('value', profileJob.textContent);
};

function submitFormProfile (evt) {
    evt.preventDefault();
    
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;    
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
    disableButton(submitButton);
    closePopup(modalAddCard);
    evt.target.reset();      
  };

export {setInputProfile, submitFormProfile, submitAddCard};


