// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');

function deleteCard(cardElement) {
    cardElement.remove();
}

function createCard(card, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDelete = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardDelete.addEventListener("click", function() {
    deleteCard(cardElement);
  });

  return cardElement;
}

initialCards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
    placesList.append(cardElement);
});


