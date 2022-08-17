const $formProfile = document.forms['profile-form'];
const $inputTitle = $formProfile.elements['profile__title'];
const $inputJob = $formProfile.elements['profile__subtitle'];
const $profileTitle = document.querySelector('.profile__title');
const $profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault();
    if ($inputTitle.value.length <=0 && $inputJob.value.length <=0) {
        alert('Необходимо веести имя и род деятельности');
    }
    else {
    $profileTitle.textContent = $inputTitle.value;
    $profileSubtitle.textContent = $inputJob.value;    
    document.querySelector('.popup').classList.remove('popup_opened');
    }
}

$formProfile.addEventListener('submit', formSubmitHandler);


const $toggleLike = document.querySelectorAll('.card__like');
$toggleLike.forEach ($likeIcon => {
    $likeIcon.addEventListener('click', () => {
        $likeIcon.classList.toggle($likeIcon.dataset.target);
    });
});



const $cardsContainer = document.querySelector('.card');
function addCard (cardImg , cardTitle) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardElement.querySelector('.card__image').src = cardImg;
    cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('active');
    });
    $cardsContainer.append(cardElement);
}