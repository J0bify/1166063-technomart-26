        var showCart = document.querySelector(".add-to-cart");
        var popupCart = document.querySelector(".modal-wrapper-cart");
        var buttonClose = document.querySelector(".close-popup");
        var popupCartOverlay = document.querySelector(".modal-overlay");

        showCart.addEventListener("click", function(evt){
            evt.preventDefault();
            popupCart.classList.add("modal-show");
        });
        popupCart.addEventListener("click", function(evt){
            evt.preventDefault();
            popupCart.classList.add("modal-show");
        });
        buttonClose.addEventListener("click", function(evt){
            evt.preventDefault();
            popupCart.classList.remove("modal-show");
        })
        popupCartOverlay.addEventListener("click", function(evt){
            evt.preventDefault();
            popupCart.classList.remove("modal-show");
        });