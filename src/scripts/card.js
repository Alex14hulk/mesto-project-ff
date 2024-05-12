import {deleteCardApi, likeApi, unlikeApi} from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, userId, objectId) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDelete = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const buttonLike = cardElement.querySelector(".card__like-button");
  const cardLikesAmount = cardElement.querySelector(".card__likes-amount")
  const cardId = card._id;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;
  cardLikesAmount.textContent = card.likes ? card.likes.length : 0;

  buttonLike.addEventListener("click", (evt) => objectId.likeCard(evt, cardId, objectId));

  if (card.likes.some((like) => like.id === userId)) {
    buttonLike.classList.add("card__like-button_is-active");
  }

  if (card.user._id !== userId) {
    cardDelete.remove();
  }
  else {
    cardDelete.addEventListener("click", () => objectId.deleteCard(cardElement, cardId));
  }

  cardImage.addEventListener('click', () => objectId.openImagePopup(card));

  return cardElement;
};

function likeCard(evt, cardElement) {
  if  (
    evt.target.classList.contains("card__like-button_is-active") &&
    evt.target.classList.contains("card__like-button")
  ) {
    unlikeApi(cardElement.id)
      .then((res) => {
        console.log(res);
        evt.target.classList.toggle("card__like-button_is-active");
        cardElement.querySelector(".card__likes-amount").textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (evt.target.classList.contains("card__like-button")) {
    likeApi(cardElement.id)
      .then((res) => {
        console.log(res);
        evt.target.classList.toggle("card__like-button_is-active");
        cardElement.querySelector(".card__likes-amount").textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  

function deleteCard(cardElement) {
  deleteCardApi(cardElement.id)
    .then((res) => {
      console.log(res);
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}
  

export {createCard, deleteCard, likeCard}