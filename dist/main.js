(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n)}function n(e){"Escaape"===e.key&&t(document.querySelector(".popup_is-opened"))}var o=document.querySelector("#card-template").content;function r(e,t,n,r){var c=o.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__delete-button"),d=c.querySelector(".card__image"),i=c.querySelector(".card__like-button");return document.querySelector(".popup_type_image"),d.src=e.link,d.alt=e.name,c.querySelector(".card__title").textContent=e.name,a.addEventListener("click",(function(){t(c)})),i.addEventListener("click",(function(e){n(e)})),d.addEventListener("click",(function(e){r(e)})),c}function c(e){e.target.classList.toggle("card__like-button_is-active")}function a(e){e.remove()}var d=document.querySelector(".places__list"),i=document.querySelector(".profile__edit-button"),p=document.querySelector(".popup_type_edit"),u=document.querySelector(".profile__title"),l=document.querySelector(".profile__description"),s=document.forms["edit-profile"],m=s.elements.name,_=s.elements.description,y=document.querySelector(".profile__add-button"),f=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup_type_image"),k=document.querySelector(".popup__image"),q=document.querySelector(".popup__caption"),S=document.forms["new-place"],g=(S.elements["place-name"],S.elements.link,Array.from(document.querySelectorAll(".popup")));function L(t){var n;n=t.target,k.src=n.src,k.alt=n.alt,q.textContent=n.closest(".card").querySelector(".card__title").textContent,e(v)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=r(e,a,c,L);d.append(t)})),s.addEventListener("submit",(function(e){e.preventDefault(),u.textContent=m.value,l.textContent=_.value,t(p)})),function(e){e.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(n){t(e)})),e.addEventListener("click",(function(n){n.target.classList.contains("popup_is-opened")&&t(e)}))}))}(g),i.addEventListener("click",(function(){m.value=u.textContent,_.value=l.textContent,e(p)})),y.addEventListener("click",(function(){e(f)})),S.addEventListener("submit",(function(e){e.preventDefault();var n={name:e.target.inputNewPlaceName.value,link:e.target.inputNewPlaceLink.value};d.prepend(r(n,a,c,L)),S.reset(),t(f)}))})();