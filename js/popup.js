var opening = document.querySelector(".popup-open");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var fio = popup.querySelector("[type=text]");
var email = popup.querySelector("[type=email]");
var letter = popup.querySelector("textarea");

var isStorageSupport = true;
var fiostorage = "";
var mailstorage = "";
  
try {
    fiostorage = localStorage.getItem("fio");
    mailstorage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}


opening.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (fiostorage && mailstorage) {
  	fio.value = fiostorage;
  	email.value = mailstorage;
  	letter.focus();
  } else {
  	if (fiostorage) {
  	  fio.value = fiostorage;
  	  email.focus();
  	} else if (mailstorage) {
  	  email.value = mailstorage;
  	  fio.focus();
  	} else {
  	  fio.focus();
  	}
   }	
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error")
  });

form.addEventListener("submit", function (evt) {
    if (!fio.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("fio", fio.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
  });