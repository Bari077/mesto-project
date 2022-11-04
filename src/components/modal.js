
function closeEscHandler(evt) {  
    if(evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'));
    }
};


function closeOverlayHandler(evt) {
  const popupOpened = document.querySelector('.popup_opened');  
    if(evt.target === popupOpened) {
      closePopup(popupOpened);
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


