import { popup } from "./utils.js"

function closeEscHandler(evt) {
  popup.forEach(function(el) {
    if(evt.key === 'Escape') {
      closePopup(el.closest('.popup'));
    }
  }); 
};

function closeOverlayHandler(evt) {
  popup.forEach(function(el) {
    if(evt.target === el) {
      closePopup(el.closest('.popup'));
    }   
  });
};

function openPopup(popupId) {
    popupId.classList.add('popup_opened');
    window.addEventListener('keydown', closeEscHandler);
    popupId.addEventListener('mousedown', closeOverlayHandler);           
};

function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeEscHandler);
  popupId.removeEventListener('mousedown', closeOverlayHandler);
};




export {openPopup, closePopup};


