//Массив с карточками
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


//Обработка процесса открытия и закрытия вкладки popup и add-form
const popup = document.querySelector('.popup');
const addForm = document.querySelector('.add-form');

let openbutton = document.querySelector('.profile__edit-button');
let addbutton = document.querySelector('.profile__add-button');
let closebutton = document.querySelector('.popup__close-button');
let closeformbutton = document.querySelector('.add-form__close-button');

const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_description');
let userProfile = document.querySelector('.profile__username');
let userDescription = document.querySelector('.profile__description');

let designationInput = document.querySelector('.popup__input_type_designation');
let linkInput = document.querySelector('.popup__input_type_link');


//Функции открытия и закрытия popup и add-form
function openPopup() {
    popup.classList.add('popup_opened');

    nameInput.value = userProfile.textContent;
    jobInput.value = userDescription.textContent;
};

function openAddForm() {
    addForm.classList.add('add-form_opened');
};

function closePopup() {
    popup.classList.remove('popup_opened');
};

function closeAddForm() {
    addForm.classList.remove('add-form_opened');
};

//Функция заполнения формы popup
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    userProfile.textContent = nameInput.value;
    userDescription.textContent = jobInput.value;

    closePopup();
};

//Процесс добавления карточек из массива, удаления из массива, активации кнопки лайк
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

const elementInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function renderCard({ name, link}) {
    const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
    elementCard.querySelector('.element__image').src = link;
    elementCard.querySelector('.element__title').textContent = name;

 //Работа кнопки "лайк"   
    elementCard.querySelector('.element__like-button').addEventListener('click', function (event){
      event.target.classList.toggle('element__like-button_active');
    });

//Работа кнопки "урна"    
    elementCard.querySelector('.element__trash-button').addEventListener('click', function() {
      elementCard.remove();
    });

    elementsContainer.prepend(elementCard);
  }

function render() {
  elementInfo.forEach(renderCard);
}

render();

//Поп-ап карточки

//Работа кнопок
openbutton.addEventListener('click', openPopup);

addbutton.addEventListener('click', openAddForm);

closebutton.addEventListener('click', closePopup);

closeformbutton.addEventListener('click', closeAddForm);

formElement.addEventListener('submit', formSubmitHandler);


