const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
function callPopup() {
    let popupWindow = document.querySelector('.popup');
    if (popupWindow.classList.contains('popup_opened') === true) {
        popupWindow.classList.remove('popup_opened');
    }
    else {
        popupWindow.classList.add('popup_opened');
    }

}
editButton.addEventListener('click', callPopup);
closeButton.addEventListener('click', callPopup);