
function deleteCard(cardElement) {
    cardElement.remove();
}

function createCard(card, deleteCard, likeCard, openImagePopup) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDelete = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const buttonLike = cardElement.querySelector(".card__like-button");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardDelete.addEventListener("click", function() {
    deleteCard(cardElement);
  });

  buttonLike.addEventListener("click", function(){
    likeCard(cardElement);
  });

  cardImage.addEventListener("click", function(){
    openImagePopup(cardElement);
  })

  return cardElement;
}

function likeCard(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
}

export {createCard, deleteCard, likeCard}