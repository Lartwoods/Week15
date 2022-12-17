function checkError() {
  let email = document.getElementById("regform__email");
  document.getElementById("regform__error").innerHTML = "";

  let password = document.getElementById("regform__password");
  if (email.value == "") {
    document.getElementById("regform__error").innerHTML +=
      "Укажите адрес Gmail<br>";
  }
  if (password.value == "") {
    document.getElementById("regform__error").innerHTML += "Введите пароль<br>";
  }
}
