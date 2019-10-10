        var showCart = document.querySelector(".add-to-cart");
        var popupCart = document.querySelector(".modal-wrapper.modal-wrapper-cart");
        var buttonClose = document.querySelector(".modal-wrapper-cart .close-popup");
        var closePopup = document.querySelector(".modal-wrapper-cart .close-btn");
        var popupCartOverlay = document.querySelector(".modal-wrapper-cart .modal-overlay");

        showCart.addEventListener("click", function(evt){
            evt.preventDefault();
            popupCart.classList.add("modal-show");
        });
        buttonClose.addEventListener("click", function(evt){
            evt.preventDefault();
           if(popupCart.classList.contains("modal-show")){

                popupCart.classList.remove("modal-show");
            }
            
        });
        closePopup.addEventListener("click", function(evt){
            evt.preventDefault();
           if(popupCart.classList.contains("modal-show")){

                popupCart.classList.remove("modal-show");
            }
            
        });
        popupCartOverlay.addEventListener("click", function(evt){
            evt.preventDefault();
           if(popupCart.classList.contains("modal-show")){

                popupCart.classList.remove("modal-show");
            }
            
        });