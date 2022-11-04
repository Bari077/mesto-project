function setInitialInput(inputField, valueField) {
  inputField.setAttribute('value', valueField.textContent);
}

function saveInputValue(inputField, valueField) {
  valueField.textContent = inputField.value;
}

function disableButton(buttonElement, inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;  
}

export {setInitialInput, saveInputValue, disableButton};