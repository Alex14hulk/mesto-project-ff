import {deleteCardApi, likeApi, unlikeApi} from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, deleteCard, likeCard, openImagePopup, userId) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDelete = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const buttonLike = cardElement.querySelector(".card__like-button");
  const cardLikesAmount = cardElement.querySelector(".card__likes-amount")
  
  cardElement.id = card._id;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;
  cardLikesAmount.textContent = card.likes ? card.likes.length : 0;

  buttonLike.addEventListener("click", (evt) => likeCard(evt, cardElement));

  if (card.likes.some((like) => like.id === userId)) {
    buttonLike.classList.add("card__like-button_is-active");
  }

  if (userId === card.owner._id) {
    cardDelete.style.display = "block";
  } else {
    cardDelete.style.display = "none";
  }
  
  cardDelete.addEventListener("click", () => deleteCard(cardElement));

  cardImage.addEventListener('click', () => openImagePopup(card));

  return cardElement;
};

function likeCard(evt, cardElement) {
  const likeMethod = evt.target.classList.contains("card__like-button_is-active") ? unlikeApi : likeApi;
  likeMethod(cardElement.id) 
    .then((res) => {
        evt.target.classList.toggle("card__like-button_is-active"); 
        cardElement.querySelector(".card__likes-amount").textContent = res.likes.length;        
    })
    .catch(err => console.log(err));
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