import "../pages/index.css";

import {
  openPopup,
  closePopup,
  setCloseModalByClickListeners
} from './modal';

import { createCard, deleteCard, likeCard } from './card';

import { initialCards } from './cards.js';

import {clearValidation, enableValidation } from "./validation.js";

import {validationSettings} from "./validationSettings.js";

import {getInfoApi, getCardsApi, editProfileApi, addCardApi, changeAvatarApi} from "./api.js";

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
const avatar = document.querySelector(".profile__image");
const PopupChangeAvatar = document.querySelector(".popup_type_change-avatar");
const newAvatarLink = document.querySelector("#avatar-input");


function showCard(card, deleteCard, likeCard, openImagePopup, userInfo) {
  const userId = userInfo._id;
  const cardElement = createCard(card, deleteCard, likeCard, openImagePopup, userId);
  if (card.likes.some((like) => like.id === userId)) {
    const buttonLike = cardElement.querySelector(".card__like-button");
    buttonLike.classList.add("card__like-button_is-active");
  } 

  cardsContainer.append(cardElement);
}

Promise.all([getInfoApi(), getCardsApi()])
  .then(() => {
    initialCards.forEach((card) =>
    showCard(card, deleteCard, likeCard, openImagePopup, userInfo)
    );
  })
  .catch((err) => {
    console.log(err);
  });

function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameProfileInput.value;
    profileDescription.textContent = jobProfileInput.value;

    editProfileApi()
      .then(() => {
        closePopup(popupEditProfile);
      })
      .catch((err) => {
        console.log(err);
      });
}

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit); 

setCloseModalByClickListeners(popupList);

function fillEditProfileForm() {
  nameProfileInput.value = profileTitle.textContent;
  jobProfileInput.value = profileDescription.textContent;
}

buttonEditProfile.addEventListener("click", function() {
  fillEditProfileForm();
  openPopup(popupEditProfile);
  clearValidation(formEditProfile, validationSettings);
})

addButton.addEventListener("click", function() {
  openPopup(popupNewCard);
  clearValidation(formNewPlace, validationSettings);
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


  addCardApi()
      .then(() => {
        cardsContainer.prepend(createCard(card, deleteCard, likeCard, openImagePopup));
        formNewPlace.reset();
        closePopup(popupNewCard);
      })
      .catch((err) => {
        console.log(err);
      });
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

popupChangeAvatar.addEventListener("submit", changeAvatar);

function changeAvatarLoc(avatarLink) {
  avatar.style.backgroundImage = `url(${avatarLink})`;
}

function changeAvatar(evt) {
  evt.preventDefault();
  evt.submitter.textContent = "Сохранение...";

  const newAvatar = newAvatarLink.value;

  changeAvatarApi(newAvatar)
    .then((res) => {
      changeAvatarLoc(res.avatar);
      closePopup(popupChangeAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      evt.submitter.textContent = "Сохранение...";
    })
}

enableValidation(validationSettings);