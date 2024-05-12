import {validationSettings} from "./validationSettings.js";

const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElementElement.classList.add(validationSettings.errorClass);
}


const hideInputError = (formElement, inputElement, validationSettings) => {
    errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationSettings.inputErrorClass);
    errorElement.classList.remove(validationSettings.errorClass);
    errorElement.textContent = "";
};

const isValid = () => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } 
    else {
        inputElement.setCustomValidity("");
    }
    
    if (!formInput.validity.valid) {
      showInputError(formElement, inputElement, formInput.validationMessage, validationSettings);
    } 
    else {
      hideInputError(formElement, inputElement, validationSettings);
    }
};

function setEventListeners(formElement, validationSettings) {
    const inputList = Array.from(formElement.querySelectorAll(validationSettings.formSelector));
  
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, validationSettings);
            toggleButtonState(inputList, buttonElement, validationSettings);
        });
    });
}
  
function hasInvalidInput(inputList) {
    return inputList.some((inputElement => !inputElement.validity.valid));
}

function toggleButtonState(inputList, buttonElement, validationSettings) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationSettings.inactiveButtonClass);
    } 
    else {
        buttonElement.classList.remove(validationSettings.inactiveButtonClass);
    }
}

function enableValidation (validationSettings) {
    const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationSettings);
    });
}

function clearValidation(formElement, validationSettings) {
    const inputs = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
    const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);

    inputs.forEach(input => hideInputError(formElement, input, validationSettings));
    formElement.reset();
    toggleButtonState(inputs, buttonElement, validationSettings);
}

export {clearValidation, enableValidation};