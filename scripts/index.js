// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const placesList = document.querySelector('.places__list');

function deleteCard(cardElement) {
    cardElement.remove();
}

function createCard(cardName, cardLink) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardDelete = cardElement.querySelector(".card__delete-button");
    
    cardElement.querySelector(".card__image").src = cardLink;
    cardElement.querySelector('.card__title').textContent = cardName;

    
    cardDelete.addEventListener('click', function() {
        deleteCard(cardElement);
    });

    return cardElement;
}

initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData.name, cardData.link);
    placesList.append(cardElement);
});

