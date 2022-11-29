//Обработка процесса открытия и закрытия вкладки popup
let popup = document.querySelector('.popup');
let openbutton = document.querySelector('.profile__edit-button');
let closebutton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');
let userProfile = document.querySelector('.profile__username');
let userDescription = document.querySelector('.profile__description');


function openPopup() {
    popup.classList.add('popup_opened');

    nameInput.value = userProfile.textContent;
    jobInput.value = userDescription.textContent;
}


function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    userProfile.textContent = nameInput.value;
    userDescription.textContent = jobInput.value;

    closePopup();
}

openbutton.addEventListener('click', openPopup);

closebutton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);


