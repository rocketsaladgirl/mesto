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
    },
  ];

const elementsContainer = document.querySelector('.elements');

//Создаем новый массив из данного
const elementInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

//Добавление карточки из массива
// функция создаёт карточки
const createCard = (cardLink, cardTitle) => {
    //берем элементы из блока template
    const elementTemplate = document.querySelector('#element-template').content;
    //клонируем шаблон карточки из template
    const elementCard = elementTemplate.querySelector('.element').cloneNode(true);

//Устанавливаем атрибуты карточки
    elementCardImage = elementCard.querySelector('.element__image');
    elementCardTitle = elementCard.querySelector('.element__title');

    elementCardImage.src = cardLink;
    elementCardImage.alt = cardTitle;
    elementCardTitle.textContent = cardTitle;

//Работа кнопки "лайк"   
    elementCard.querySelector('.element__like-button').addEventListener('click', function (event){
      event.target.classList.toggle('element__like-button_active');
    });

//Работа кнопки "урна"    
    elementCard.querySelector('.element__trash-button').addEventListener('click', function() {
      elementCard.remove();
    });

//Поп-ап карточки
    elementCard.querySelector('.element__image').addEventListener('click', function () {
        openPopupWindow(popupOpenImage);

        popupImageLink.src = cardLink;
        popupImageLink.alt = cardTitle;
        popupImageTitle.textContent = cardTitle;
    });

    return elementCard;
  };

//Функция добавляет карточку
 const addCard = (cardNew) => {
    elementsContainer.prepend(cardNew);
  };

  elementInfo.forEach((item) => {
    addCard(createCard(item.link, item.name));
  });

//Функция заполнения формы add-form
function formSaveHandler (evt) {
    evt.preventDefault();

        cardLink =  popupAddFormLinkInput.value;
        cardTitle = popupAddFormTitleInput.value;

    addCard(createCard(cardLink, cardTitle));

    closePopupWindow(popupAddForm);

    popupAddFormTitleInput.value = popupAddFormTitleInput.textContent;
    popupAddFormLinkInput.value = popupAddFormLinkInput.textContent;
};


//Попап окна
const popupWindow = document.querySelectorAll('.popup'); //исправлено
const popupEditForm = document.querySelector('.popup__editform'); //исправлено
const popupAddForm = document.querySelector('.popup__addform'); //исправлено
const popupOpenImage = document.querySelector('.popup__imgform'); //исправлено

//Кнопки закрытия окон
const popupCloseButtons = document.querySelectorAll('.popup__close-button'); //исправлено

//Кнопки открытия окон
const profileEditOpenButton = document.querySelector('.profile__edit-button');//исправлено
const formAddOpenButton = document.querySelector('.profile__add-button');//исправлено

//Элементы формы edit-form
const popupEditElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const userProfile = document.querySelector('.profile__username');
const userDescription = document.querySelector('.profile__description');

//Элементы формы add-form
const popupAddFormArea = document.querySelector('.popup__add-area');
const popupAddFormTitleInput = document.querySelector('.popup__input_type_title');
const popupAddFormLinkInput = document.querySelector('.popup__input_type_link');

//Элементы формы image
const popupImageLink = document.querySelector('.popup__img-place');
const popupImageTitle = document.querySelector('.popup__img-title');


//Функции открытия и закрытия popup, add-form и image
//Функция открытия popup окон
function openPopupWindow(item) {
    item.classList.add('popup_opened');
};

//Работа кнопок открытия окон popup
//edit-form
profileEditOpenButton.addEventListener('click', function() {
    openPopupWindow(popupEditForm);

    nameInput.value = userProfile.textContent;
    jobInput.value = userDescription.textContent;
});

//add-form
formAddOpenButton.addEventListener('click', function() {
    openPopupWindow(popupAddForm);
});

//Функция заполнения формы popup
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    userProfile.textContent = nameInput.value;
    userDescription.textContent = jobInput.value;

    closePopupWindow(popupEditForm);

};


//Функция закрытия popup окон
function closePopupWindow(item) {
    item.classList.remove('popup_opened');
};


popupCloseButtons.forEach(btn => btn.addEventListener('click', () => {
    const popup = btn.closest('.popup');
    closePopupWindow(popup);
}));


popupEditElement.addEventListener('submit', formSubmitHandler);// работает

popupAddFormArea.addEventListener('submit', formSaveHandler); //работает





