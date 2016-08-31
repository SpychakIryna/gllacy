var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-block");
var close = popup.querySelector(".modal-block-close");
var form = popup.querySelector("form");
var user_name = popup.querySelector("[name=user-name]");
var user_mail = popup.querySelector("[name=user-mail]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-block-show");
  user_name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-block-show");
});

form.addEventListener("submit", function(event) {
  if (!user_name.value || !user_mail.value) {
    event.preventDefault();
  }
});
