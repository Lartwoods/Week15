function checkError() {
  let email = document.getElementById("regform__email");
  let password = document.getElementById("regform__password");
  let yourName = document.getElementById("regform__name");
  let yourLast = document.getElementById("regform__lastname");
  let passwordConfirm = document.getElementById("regform__confirm");
  document.getElementById("regform__error").innerHTML = "";
  document.getElementById("regform__names_error").innerHTML = "";
  document.getElementById("regform__error_gmail").innerHTML = "";
  document.getElementById("regform__error_confirm").innerHTML = "";

  if (email.value == "") {
    document.getElementById("regform__error_gmail").innerHTML +=
      "Укажите адрес Gmail<br>";
  }
  if (password.value == "") {
    document.getElementById("regform__error").innerHTML += "Введите пароль<br>";
  }
  if (yourName.value == "" || yourLast.value == "") {
    document.getElementById("regform__names_error").innerHTML +=
      "Введите Ваши имя и фамилию<br>";
  }
  if (passwordConfirm.value == "") {
    document.getElementById("regform__error_confirm").innerHTML +=
      "Подтвердите пароль<br>";
  }
  if (passwordConfirm.value !== password.value) {
    document.getElementById("regform__error_confirm").innerHTML +=
      "Пароли не совпадают<br>";
  }
}
