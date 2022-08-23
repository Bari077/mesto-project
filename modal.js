const $toggleModal = document.querySelectorAll('#openModal');
$toggleModal.forEach($openButton => {
    const $modalPopup = document.getElementById($openButton.dataset.target);
    $openButton.addEventListener('click', () => {
        $modalPopup.classList.add('popup_opened');
    });
    
    const $closeModal = $modalPopup.querySelectorAll('.popup__close-button');
    $closeModal.forEach($closeButton => {
        $closeButton.addEventListener('click', () => {
            $modalPopup.classList.remove('popup_opened');
        });
    });
});
