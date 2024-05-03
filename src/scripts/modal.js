export { openPopup, closePopup, setCloseModalByClickListeners};

function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    addEscapeClose();
}

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    removeEscapeClose();
}

function handleClosePopupEscape(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector(".popup_is-opened"));
    }
}

function addEscapeClose() {
    document.addEventListener("keydown", handleClosePopupEscape);
}

function removeEscapeClose() {
    document.removeEventListener("keydown", handleClosePopupEscape);
}

function setCloseModalByClickListeners(popupList) {
    popupList.forEach(popup => {
        const closeButton = popup.querySelector(".popup__close");
        
        closeButton.addEventListener('click', (evt) => {
            closePopup(popup);
        });

        popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains("popup_is-opened")) {
                closePopup(popup);
            }
        })
    });
}

