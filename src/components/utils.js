function setInitialInput(inputField, valueField) {
  inputField.setAttribute('value', valueField.textContent);
}

function disableButton(formSelect, inactiveButtonClass) {
  const buttonElement = formSelect.elements['form__submit'];
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;  
}



export {setInitialInput, disableButton };