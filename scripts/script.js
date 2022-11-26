//Обработка процесса открытия и закрытия вкладки popup
let popup = document.querySelector('.popup');
let openbutton = document.querySelector('.profile__edit-button');
let closebutton = document.querySelector('.popup__close-button');

function openPopup() {
    popup.classList.add('popup_opened');
}
openbutton.addEventListener('click', openPopup);


function closePopup() {
    popup.classList.remove('popup_opened');
}
closebutton.addEventListener('click', closePopup);

//Обработка процесса работы кнопки "Сохрани"
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__username');
let jobInput = document.querySelector('.popup__description');


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    const name = document.querySelector('.profile__username');
    const description = document.querySelector('.profile__description');

    name.textContent = nameInput.value;
    description.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);


