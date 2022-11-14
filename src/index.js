import './pages/index.css';

import {editBtn, formProfile, modalProfile, addCardBtn, modalAddCard, closeBtn, avatarBtn, modalAvatar, inputName, inputJob, inputTitle, inputImgLink, formAvatar, inputAvatarLink, profileName, profileJob, profileAvatar, formAddCard, cardsContainer} from './components/global.js';
import { openPopup, closePopup } from './components/modal.js';
import { setInitialInput, disableButton } from './components/utils.js';
import { addCard } from './components/card.js';
import { enableValidation } from './components/validate.js';
import {getInitialCards, getMyProfile, updateProfile, updateAvatar, sendNewCard } from './components/api.js';

function loadingSpinner(isLoading) {
  const spinner = document.querySelector('.spinner');
  if(isLoading) {
    spinner.classList.add('spinner_visible');
    profileAvatar.classList.add('profile__avatar_hidden');
  }
  else {
    profileAvatar.classList.remove('profile__avatar_hidden');
    spinner.classList.remove('spinner_visible')
  }
}

function loadData(isLoading, formSelect) {
  const buttonElement = formSelect.elements['form__submit'];
  if(isLoading) {
    buttonElement.setAttribute('value', 'Сохранение...')
  }
  else {
    if(formSelect !== formAddCard)
    buttonElement.setAttribute('value', 'Сохранить')
    else {
      buttonElement.setAttribute('value', 'Создать')
    }
  };
};

function submitFormAvatar (evt) {
  evt.preventDefault();
  loadData(true, formAvatar);  
  updateAvatar(`${inputAvatarLink.value}`)
  .then(avatar => {
    profileAvatar.setAttribute('src', avatar.avatar);
    closePopup(modalAvatar);        
    evt.target.reset(); 
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    loadData(false, formAvatar)
  });
     
}

function submitFormProfile (evt) {
  evt.preventDefault();
  loadData(true, formProfile);  
  updateProfile(`${inputName.value}`, `${inputJob.value}`)
  .then(me => {
    profileName.textContent = me.name;
    profileJob.textContent = me.about;
    closePopup(modalProfile);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    loadData(false, formProfile)
  });    
};

function submitAddCard (evt) {    
  evt.preventDefault();
  loadData(true, formAddCard);  
  sendNewCard(inputTitle.value, inputImgLink.value).
  then(card => {
    const myCard = addCard(card.link, card.name, card.owner._id, card.owner._id, card._id, card.likes);    
    cardsContainer.prepend(myCard)
    closePopup(modalAddCard);    
    evt.target.reset();
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    loadData(false, formAddCard)
  });           
};

avatarBtn.addEventListener('click', () => {
  disableButton(formAvatar, 'popup__button_disabled');
  openPopup(modalAvatar);  
})

editBtn.addEventListener('click', () => { 
  setInitialInput(inputName, profileName);
  setInitialInput(inputJob, profileJob);
  disableButton(formProfile, 'popup__button_disabled');
  openPopup(modalProfile);  
});

addCardBtn.addEventListener('click', () => {
  disableButton(formAddCard, 'popup__button_disabled');
  openPopup(modalAddCard);  
});

formAvatar.addEventListener('submit', submitFormAvatar);

formProfile.addEventListener('submit', submitFormProfile);

formAddCard.addEventListener('submit', submitAddCard);

closeBtn.forEach(function(el) {
  el.addEventListener('click', () => {
    closePopup(el.closest('.popup'));
  });
});

function loadPage() {
  loadingSpinner(true);
  Promise.all([getMyProfile(), getInitialCards()])
  .then(([profile, initialCards]) => {
    profileName.textContent = profile.name;
    profileJob.textContent = profile.about;
    profileAvatar.setAttribute('src', profile.avatar);
    initialCards.forEach(card => {
      const cardElement = addCard(card.link , card.name, card.owner._id, profile._id, card._id, card.likes);
      cardsContainer.append(cardElement);
    }) 
  })
  .catch((err) => {
    alert(err)
  })
  .finally(() => {
    loadingSpinner(false)
  })
}

loadPage();
enableValidation();










  