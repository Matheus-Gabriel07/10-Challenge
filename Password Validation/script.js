const input = document.getElementById("password");
const minPassword = document.getElementById("minPassword");
const numberPassword = document.getElementById("numberPassword");
const letterPassword = document.getElementById("letterPassword");
const caracterPassword = document.getElementById("caracterPassword");

document.addEventListener("input", function () {
  let inputValue = input.value;

  minPassword.classList.remove("concluido");
  numberPassword.classList.remove("concluido");
  letterPassword.classList.remove("concluido");
  caracterPassword.classList.remove("concluido");

  if (inputValue.length >= 8) {
    minPassword.classList.add("concluido");
  }

  if (/[0-9]/.test(inputValue)) {
    numberPassword.classList.add("concluido");
  }

  if (/[A-Z]/.test(inputValue)) {
    letterPassword.classList.add("concluido");
  }

  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(inputValue)) {
    caracterPassword.classList.add("concluido");
  }
});
