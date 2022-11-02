import { closePopup } from "./modal.js";

const $formProfile = document.forms['profile-form'];
const $modalProfile = document.querySelector('#modal-profile');
const $inputName = $formProfile.elements['name'];
const $inputJob = $formProfile.elements['job'];
const $profileName = document.querySelector('.profile__title');
const $profileJob = document.querySelector('.profile__subtitle');

function setInputProfile () {
  $inputName.setAttribute('value', $profileName.textContent);
  $inputJob.setAttribute('value', $profileJob.textContent);
};

function submitFormProfile (evt) {
    evt.preventDefault();
    
    $profileName.textContent = $inputName.value;
    $profileJob.textContent = $inputJob.value;    
    closePopup($modalProfile);  
    evt.target.reset();  
  };

export {setInputProfile, submitFormProfile};


