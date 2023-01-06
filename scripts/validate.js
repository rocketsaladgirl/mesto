//Данные для формы валидации
const validationConfig = {
    formSelector: '.popup__form', //блок форм
    inputSelector: '.popup__input', //поля input
    submitButtonSelector: '.popup__save-button', // кнопка 
    inactiveButtonClass: 'popup__save-button_invalid', // кнопка в неактивном состоянии
    inputErrorClass: 'popup__input_type_error', // поиск строк с инпутом в состоянии ошибки
    errorClass: 'popup__input-error_visible' // делает строки спанов с текстом ошибок видимыми
};

//Валидация формы
//Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
};
    
//Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = ''; 
    errorElement.classList.remove(config.errorClass);
};
 
    
//Функция проверяющая валидность
const checkInputValidity = (formElement, inputElement, config) => {
    if (inputElement.validity.valid) {//если поле проходит валидацию
       hideInputError(formElement, inputElement, config); // скроем ошибку
    } else {
        showInputError(formElement, inputElement, config); //если не проходит, покажем
    };
};

//Функция проверки наличия невалидного поля в массиве полей input для последующей работы с кнопкой
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
}; 

//Функция работы кнопки при проверке валидности функцией hasInvalidInput
const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.remove(config.submitButtonSelector);
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.add(config.submitButtonSelector);
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false;
    };
};

//Слушатель события input для всех строк
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
      

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
   });
};


//Функция проверки для всех форм
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
};

