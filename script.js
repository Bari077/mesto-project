
const $formProfile = document.forms['profile-form'];
const $inputName = $formProfile.elements['profile__title'];
const $inputJob = $formProfile.elements['profile__subtitle'];
const $profileName = document.querySelector('.profile__title');
const $profileJob = document.querySelector('.profile__subtitle');

function formProfileSubmit (evt) {
    evt.preventDefault();
    if ($inputName.value.length <=0 || $inputJob.value.length <=0) {
        alert('Необходимо веести имя и род деятельности');
    }
    else {
    $profileName.textContent = $inputName.value;
    $profileJob.textContent = $inputJob.value;    
    document.querySelector('.popup').classList.remove('popup_opened');
    }
}

$formProfile.addEventListener('submit', formProfileSubmit);


const $toggleLike = document.querySelectorAll('.card__like');
$toggleLike.forEach ($likeIcon => {
    $likeIcon.addEventListener('click', () => {
        $likeIcon.classList.toggle($likeIcon.dataset.target);
    });
});


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
}

const $formAddCard = document.forms['addCard-form'];
const $inputTitle = $formAddCard.elements['profile__title'];
const $inputImgLink = $formAddCard.elements['profile__subtitle'];
function formAddCardSubmit (evt) {
    evt.preventDefault();
    if ($inputTitle.value.length <=0 || $inputImgLink.value.length <=0) {
        alert('Необходимо веести название и ссылку');
    }
    else {
    addCard($inputImgLink.value, $inputTitle.value);
    document.getElementById('modal-addCard').classList.remove('popup_opened');
    }
}

$formAddCard.addEventListener('submit', formAddCardSubmit);