
var messagePopup = document.querySelector(".message-popup");
var openMessagePopup = document.querySelector(".message-js");
var closeMessagePopup = document.querySelector(".message-popup .popup-close");

var cartPopup = document.querySelector(".cart-popup");
var openCartPopup = document.querySelectorAll(".product .btn-buy");
var closeCartPopup = cartPopup.querySelector(".popup-close");
var submitCart = cartPopup.querySelector(".continue-shopping");

var cartOrders = document.querySelector(".header-orders-cart");
var counterOrders = cartOrders.querySelector(".carts-num");

var addBookmark = document.querySelectorAll(".product .btn-to-bookmarks");
var cartBookmarks = document.querySelector(".header-orders-bookmarks");
var counterBookmarks = cartBookmarks.querySelector(".bookmarks-num");

var sendBtn = document.querySelector(".send-btn");
var userName = document.querySelector(".name");
var userEmail = document.querySelector(".email");
var userMessage = document.querySelector(".message");

var screenBlackout = document.querySelector(".screen-blackout");

if (openMessagePopup){
	openMessagePopup.addEventListener("click", function(event){
		event.preventDefault();
		messagePopup.classList.add("popup-open");
		userName.focus();
		screenBlackout.classList.add("screen-blackout-display");
	});
}

if(closeMessagePopup){
	closeMessagePopup.addEventListener("click", function(event){
		event.preventDefault();
		if(messagePopup.classList.contains("popup-open")){
			messagePopup.classList.remove("popup-open");
			screenBlackout.classList.remove("screen-blackout-display");
		}
	});
}

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
  	if(messagePopup){
	    if (messagePopup.classList.contains('popup-open')) {
	     	messagePopup.classList.remove('popup-open');
	      screenBlackout.classList.remove("screen-blackout-display");
	    }
	  }
    if (cartPopup.classList.contains('popup-cart-open')) {
     	cartPopup.classList.remove('popup-cart-open');
    }
  }
});

if(screenBlackout){
	screenBlackout.addEventListener("click", function(event){
		event.preventDefault();
		if (messagePopup.classList.contains("popup-open")){
			messagePopup.classList.remove("popup-open");
			screenBlackout.classList.remove("screen-blackout-display");
		}
	});
}

for(var i = 0; i < openCartPopup.length; i++){
	openCartPopup[i].addEventListener("click", cartProcessing);
}

for(var j = 0; j < addBookmark.length; j++){
	addBookmark[j].addEventListener("click", bookmarksProcessing);
}

function cartProcessing(){
	event.preventDefault();
	if (!cartPopup.classList.contains("popup-cart-open")){
		cartPopup.classList.add("popup-cart-open");
	}
	cartOrders.classList.add('header-orders-cart-active');
  var count = Number(counterOrders.innerHTML);
  counterOrders.innerHTML = count += 1;
}

function bookmarksProcessing(){
	event.preventDefault();
	var count = Number(counterBookmarks.innerHTML);
	counterBookmarks.innerHTML = count += 1;
}

submitCart.addEventListener("click", function(event){
	event.preventDefault();
	if (cartPopup.classList.contains("popup-cart-open")){
		cartPopup.classList.remove("popup-cart-open");
	}
});

closeCartPopup.addEventListener("click", function(event){
	event.preventDefault();
	if (cartPopup.classList.contains("popup-cart-open")){
		cartPopup.classList.remove("popup-cart-open");
	}
});

if(sendBtn){
	sendBtn.addEventListener("click", function(event){
		event.preventDefault();
		if(!userName.value || !userEmail.value || !userMessage.value){
			if (!messagePopup.classList.contains("popup-shake")){
				messagePopup.classList.add("popup-shake");
			}
		}
	});
}
