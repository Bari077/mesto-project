
function closeEscHandler(evt) {  
    if(evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'));
    }
};


function closeOverlayHandler(evt) {  
    if(evt.target === evt.currentTarget) {
      closePopup(evt.target);
    } 
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


