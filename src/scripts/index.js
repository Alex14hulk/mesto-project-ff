import "../pages/index.css";

import {
  openPopup,
  closePopup,
  setCloseModalByClickListeners
} from './modal';

import { createCard, deleteCard, likeCard } from './card';

import { initialCards } from './cards.js';

const cardsContainer = document.querySelector('.places__list');
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_edit");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formEditProfile = document.forms["edit-profile"];
const nameProfileInput = formEditProfile.elements.name;
const jobProfileInput = formEditProfile.elements.description;
const addButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupCardWindow = document.querySelector(".popup_type_image");
const popupCardImage = document.querySelector(".popup__image");
const popupCardCaption = document.querySelector(".popup__caption");
const formNewPlace = document.forms["new-place"];
const inputNewPlaceName = formNewPlace.elements["place-name"];
const inputNewPlaceLink = formNewPlace.elements["link"];
const popupList = Array.from(document.querySelectorAll(".popup"));


initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard, likeCard, openImagePopup);
    cardsContainer.append(cardElement);
}); 


function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameProfileInput.value;
    profileDescription.textContent = jobProfileInput.value;
    closePopup(popupEditProfile);
}

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit); 

setCloseModalByClickListeners(popupList);

popupList.forEach((card) => card.classList.add("popup_is-animated"));

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
    name: inputNewPlaceName.value,
    link: inputNewPlaceLink.value
  };
  cardsContainer.prepend(createCard(card, deleteCard, likeCard, openImagePopup));
  formNewPlace.reset();
  closePopup(popupNewCard);
}

formNewPlace.addEventListener("submit", handleFormAddNewCardSubmit);

function fillImagePopup(target) {
  popupCardImage.src = target.src;
  popupCardImage.alt = target.alt;
  popupCardCaption.textContent = target
    .closest(".card")
    .querySelector(".card__title").textContent;
}

function openImagePopup(evt) {
  fillImagePopup(evt.target);
  openPopup(popupCardWindow);
}