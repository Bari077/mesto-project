
const $formProfile = document.forms['profile-form'];
const $inputName = $formProfile.elements['profile__title'];
const $inputJob = $formProfile.elements['profile__subtitle'];
const $profileName = document.querySelector('.profile__title');
const $profileJob = document.querySelector('.profile__subtitle');

function submitFormProfile (evt) {
    evt.preventDefault();
    if ($inputName.value.length <=0 || $inputJob.value.length <=0) {
        alert('Необходимо веести имя и род деятельности');
    }
    else {
    $profileName.textContent = $inputName.value;
    $profileJob.textContent = $inputJob.value;    
    document.querySelector('.popup').classList.remove('popup_opened');
    }
};

$formProfile.addEventListener('submit', submitFormProfile);



const $cardsContainer = document.querySelector('.cards');
function addCard (cardImg , cardTitle) {
    const cardTemplate = document.querySelector('#card-template').content;
    const $cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    $cardElement.querySelector('.card__title').textContent = cardTitle;
    $cardElement.querySelector('.card__image').setAttribute('src', cardImg);
    $cardElement.querySelector('.card__image').setAttribute('alt', cardTitle);
    $cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__like_active');
    });
    $cardsContainer.prepend($cardElement);
};

const $formAddCard = document.forms['addCard-form'];
const $inputTitle = $formAddCard.elements['profile__title'];
const $inputImgLink = $formAddCard.elements['profile__subtitle'];
function submitAddCard (evt) {
    evt.preventDefault();
    if ($inputTitle.value.length <=0 || $inputImgLink.value.length <=0) {
        alert('Необходимо веести название и ссылку');
    }
    else {
    addCard($inputImgLink.value, $inputTitle.value);
    document.getElementById('modal-addCard').classList.remove('popup_opened');
    }
};

$formAddCard.addEventListener('submit', submitAddCard);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  initialCards.forEach(function(el) {
    addCard (el.link , el.name);
  });

  
  const $deleteButton = document.querySelectorAll('.card__trash');
  $deleteButton.forEach(function (item) {
    item.addEventListener('click', function(evt) {
    const $deleteCard = evt.target;
    $deleteCard.closest('.card').remove();
    });
  });

const $popupContainerImage = document.querySelector('#modal-Image');
function popupImage(evt) {
  const $imageSrc = evt.target.getAttribute('src');
  const $imageAlt = evt.target.getAttribute('alt');
  const $popupImageTmpl = document.querySelector('#popupImage-template').content;
  const $imageElement = $popupImageTmpl.querySelector('.popup__container_type_image').cloneNode(true);
  $imageElement.querySelector('.popup__image').setAttribute('src', $imageSrc);
  $imageElement.querySelector('.popup__image-caption').textContent = $imageAlt;
  $popupContainerImage.prepend($imageElement);
  $popupContainerImage.classList.add('popup_opened');
  $imageElement.querySelector('.popup__close-button').addEventListener('click', ()=> {
    $popupContainerImage.classList.remove('popup_opened');
    $imageElement.remove();
  });
}

const $cardImage = document.querySelectorAll('.card__image');
$cardImage.forEach(function(el) {
  el.addEventListener('click', popupImage);
});





  