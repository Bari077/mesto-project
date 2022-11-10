import { openPopup } from "./modal.js";
import { popupImage, popupImageCaption } from './global.js';
import { deleteCard, likeCard, deleteLike } from "./api.js";

const cardTemplate = document.querySelector('#card-template').content;
const modalImage = document.querySelector('#modal-Image');
function addCard (cardImg , cardTitle, ownerId, profileId, cardId, likes) {  
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);     
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElement.querySelector('.card__image').setAttribute('src', cardImg);
  cardElement.querySelector('.card__image').setAttribute('alt', cardTitle);
  cardElement.querySelector('.card__like-counter').textContent = likes.length;
  let isLiked;
  likes.forEach(el => {
    if(el._id === profileId) {
      isLiked = true;
      cardElement.querySelector('.card__like').classList.add('card__like_active');           
    }    
  });  
  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    if(!isLiked) {
      likeCard(cardId)
      .then(item => {
        isLiked = true,
        cardElement.querySelector('.card__like-counter').textContent = item.likes.length;
        evt.target.classList.toggle('card__like_active');
      });      
    }
    else {
      deleteLike(cardId) 
      .then(item => {
        isLiked = false,
        cardElement.querySelector('.card__like-counter').textContent = item.likes.length;
        evt.target.classList.toggle('card__like_active');
      });
    }       
    
  });

  cardElement.querySelector('.card__image').addEventListener('click', function() {        
    popupImage.setAttribute('src', cardImg);
    popupImage.setAttribute('alt', cardTitle);
    popupImageCaption.textContent = cardTitle;
    openPopup(modalImage);
  });  
  if(profileId === ownerId) {
    const cardTrash = document.createElement('button');
    cardTrash.classList.add('card__trash');
    cardElement.append(cardTrash);
    cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
      deleteCard(cardId)
      .then(evt.target.closest('.card').remove())
      .catch((err) => {
        alert(err)
      })
    });
 };   
  return cardElement;   
};

export {addCard};