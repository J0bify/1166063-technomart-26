var showCart = document.querySelector(".add-to-cart");
var popupCart = document.querySelector(".modal-wrapper.modal-wrapper-cart");
var buttonClose = document.querySelector(".modal-wrapper-cart .close-popup");
var closePopup = document.querySelector(".modal-wrapper-cart .close-btn");
var popupCartOverlay = document.querySelector(".modal-wrapper-cart .modal-overlay");

showCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("modal-show");
});
buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popupCart.classList.contains("modal-show")) {

        popupCart.classList.remove("modal-show");
    }

});
closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popupCart.classList.contains("modal-show")) {

        popupCart.classList.remove("modal-show");
    }

});
popupCartOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popupCart.classList.contains("modal-show")) {

        popupCart.classList.remove("modal-show");
    }

});
var showModal = document.querySelector(".button-show-modal");
var popup = document.querySelector(".modal-wrapper.modal-form");
var closePopup = document.querySelector(".close-btn");
var popupOverlay = document.querySelector(".modal-overlay");
var focusName = document.querySelector(".your-name")
showModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    focusName.focus();

});
closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
popupOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
var showMap = document.querySelector(".show-map-link");
var popupMap = document.querySelector(".modal-wrapper.modal-map");
var closePopupMap = document.querySelector(".modal-map .close-btn");
var popupOverlayMap = document.querySelector(".modal-map .modal-overlay");
showMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-map-show");

});
closePopupMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-map-show");
});
popupOverlayMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-map-show");
});