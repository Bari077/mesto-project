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
  loadData(true, formAvatar);
  evt.preventDefault();
  updateAvatar(`${inputAvatarLink.value}`)
  .then(avatar => {
    profileAvatar.setAttribute('src', avatar.avatar);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    loadData(false, formAvatar)
  });
  disableButton(formAvatar, 'popup__button_disabled');
  closePopup(modalAvatar);  
  evt.target.reset();   
}

function submitFormProfile (evt) {
  evt.preventDefault();
  loadData(true, formProfile);
  updateProfile(`${inputName.value}`, `${inputJob.value}`)
  .then(me => {
    profileName.textContent = me.name;
    profileJob.textContent = me.about;
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    loadData(false, formProfile)
  });
  disableButton(formProfile, 'popup__button_disabled');   
  closePopup(modalProfile);  
  evt.target.reset();  
};

function submitAddCard (evt) {    
  evt.preventDefault();
  loadData(true, formAddCard);
  sendNewCard(inputTitle.value, inputImgLink.value).
  then(card => {
    const myCard = addCard(card.link, card.name, card.owner._id, card.owner._id, card._id, card.likes);    
    cardsContainer.prepend(myCard)
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    loadData(false, formAddCard)
  });
  disableButton(formAddCard, 'popup__button_disabled');
  closePopup(modalAddCard);
  evt.target.reset();      
};

avatarBtn.addEventListener('click', () => {
  openPopup(modalAvatar);
})

editBtn.addEventListener('click', () => { 
  setInitialInput(inputName, profileName);
  setInitialInput(inputJob, profileJob);
  openPopup(modalProfile);
});

addCardBtn.addEventListener('click', () => {
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

function loadCards () {
  getMyProfile().then(me => {
    const profileId = me._id
    getInitialCards().then(data => {
      data.forEach(card => {
        const cardElement = addCard(card.link , card.name, card.owner._id, profileId, card._id, card.likes);
        cardsContainer.append(cardElement);
      }) 
    })
    .catch((err) => {
      alert(err);
    });
  })
     
}


function loadProfile() {
  loadingSpinner(true);
  getMyProfile().then(me => {
    profileName.textContent = me.name;
    profileJob.textContent = me.about;
    profileAvatar.setAttribute('src', me.avatar);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    loadingSpinner(false)
  })  
}




loadProfile();
loadCards();
enableValidation();










  