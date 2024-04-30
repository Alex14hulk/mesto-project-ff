import '../pages/index.css';

import {
  openPopup,
  closePopup,
  setCloseModal
} from './modal';

import { createCard, deleteCard, likeCard } from './card';

import {initialCards} from './cards';

const placesList = document.querySelector('.places__list');
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formEditProfile = document.forms["edit-profile"];
const nameProfileInput = formEditProfile.elements.name;
const jobProfileInput = formEditProfile.elements.description;
const addButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const formNewPlace = document.forms["new-place"];
const inputNewPlaceName = formNewPlace.elements["place-name"];
const inputNewPlaceLink = formNewPlace.elements["link"];
const popupList = Array.from(document.querySelectorAll(".popup"));

initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
    placesList.append(cardElement);
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameProfileInput.value;
    profileDescription.textContent = jobProfileInput.value;
    closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', handleFormSubmit); 

setCloseModal(popupList);

function fillEditProfileForm() {
  nameProfileInput.value = profileTitle.textContent;
  jobProfileInput.value = profileDescription.textContent;
}

buttonEditProfile.addEventListener("click", function() {
  fillEditProfileForm();
  openPopup(popupEditProfile);
})

addButton.addEventListener("click", function() {
  openPopup(popupNewCard);
});

function handleFormAddNewCardSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: evt.target.inputNewPlaceName.value,
    link: evt.target.inputNewPlaceLink.value
  };
  placesList.prepend(createCard(card, deleteCard, likeCard, openImagePopup));
  formNewPlace.reset();
  closePopup(popupNewCard);
}

formNewCard.addEventListener("submit", handleFormAddNewCardSubmit);