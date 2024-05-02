const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, deleteCard, likeCard, openImagePopup) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDelete = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const buttonLike = cardElement.querySelector(".card__like-button");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardDelete.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  buttonLike.addEventListener("click", (evt) => {
    likeCard(evt);
  });

  cardImage.addEventListener('click', (evt) => {
    openImagePopup(evt);
  });


  return cardElement;
};

function likeCard(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
};

function deleteCard(cardElement) {
  cardElement.remove();
};

export {createCard, deleteCard, likeCard}