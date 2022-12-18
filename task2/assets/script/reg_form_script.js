function checkError() {
  let email = document.getElementById("regform__email");
  let password = document.getElementById("regform__password");
  let yourName = document.getElementById("regform__name");
  let yourLast = document.getElementById("regform__lastname");
  document.getElementById("regform__error").innerHTML = "";
  document.getElementById("regform__names_error").innerHTML = "";

  if (email.value == "") {
    document.getElementById("regform__error").innerHTML +=
      "Укажите адрес Gmail<br>";
  }
  if (password.value == "") {
    document.getElementById("regform__error").innerHTML += "Введите пароль<br>";
  }
  if (yourName.value == "" || yourLast.value == "") {
    document.getElementById("regform__names_error").innerHTML +=
      "Введите Ваши имя и фамилию<br>";
  }
}
