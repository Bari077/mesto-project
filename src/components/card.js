import { openPopup } from "./modal.js";

const cardTemplate = document.querySelector('#card-template').content;
const modalImage = document.querySelector('#modal-Image');
function addCard (cardImg , cardTitle) {  
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);   
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElement.querySelector('.card__image').setAttribute('src', cardImg);
  cardElement.querySelector('.card__image').setAttribute('alt', cardTitle);
  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  cardElement.querySelector('.card__image').addEventListener('click', function() {
    openPopup(modalImage);    
    document.querySelector('.popup__image').setAttribute('src', cardImg);
    document.querySelector('.popup__image').setAttribute('alt', cardTitle);
    document.querySelector('.popup__image-caption').textContent = cardTitle;
  });
  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {      
    evt.target.closest('.card').remove();
    }); 
  return cardElement;   
};

export {addCard};