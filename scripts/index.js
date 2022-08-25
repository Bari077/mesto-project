const $openModal = document.querySelectorAll('.openModal');
$openModal.forEach($openButton => {
  const $modalPopup = document.getElementById($openButton.dataset.target);
  $openButton.addEventListener('click', () => {
    $modalPopup.classList.add('popup_opened');
  }); 
});
 
const $closeModal = document.querySelectorAll('.popup__close-button');
$closeModal.forEach($closeButton => {
  $closeButton.addEventListener('click', () => {
    $closeButton.closest('.popup').classList.remove('popup_opened');
  });
});

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
  document.querySelector('#modal-profile').classList.remove('popup_opened');
  }
};

$formProfile.addEventListener('submit', submitFormProfile);

const cardTemplate = document.querySelector('#card-template').content;
const $cardsContainer = document.querySelector('.cards');
function addCard (cardImg , cardTitle) {  
  const $cardElement = cardTemplate.querySelector('.card').cloneNode(true);   
  $cardElement.querySelector('.card__title').textContent = cardTitle;
  $cardElement.querySelector('.card__image').setAttribute('src', cardImg);
  $cardElement.querySelector('.card__image').setAttribute('alt', cardTitle);
  $cardElement.querySelector('.card__image').setAttribute('data-target', 'modal-Image');
  $cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });

  $cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    const $imagePopup = document.getElementById(evt.target.dataset.target);
    $imagePopup.classList.add('popup_opened');
    document.querySelector('.popup__image').setAttribute('src', cardImg);
    document.querySelector('.popup__image').setAttribute('alt', cardTitle);
    document.querySelector('.popup__image-caption').textContent = cardTitle;
  });
  $cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {      
    evt.target.closest('.card').remove();
    }); 
  return $cardElement;   
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
  $newCard = addCard($inputImgLink.value, $inputTitle.value);
  $cardsContainer.prepend($newCard);
  document.querySelector('#modal-addCard').classList.remove('popup_opened');
  evt.target.reset();
  };    
};

$formAddCard.addEventListener('submit', submitAddCard);

$initialCards.forEach(function(el) {
  $cardElement = addCard(el.link , el.name);
  $cardsContainer.prepend($cardElement);    
});

  
  






  