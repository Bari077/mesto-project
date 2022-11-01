const $popup = document.querySelectorAll('.popup');

function openPopup(popupId) {
    popupId.classList.add('popup_opened');
};

function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
};


$popup.forEach(function(el) {
  window.addEventListener('keydown', function(evt) {
    if(evt.key === 'Escape') {
      closePopup(el.closest('.popup'));
    }
  });
  el.addEventListener('mousedown', function(evt) {
    if(evt.target === el) {
      closePopup(el.closest('.popup'));
    }    
  });
});

export {openPopup, closePopup};


