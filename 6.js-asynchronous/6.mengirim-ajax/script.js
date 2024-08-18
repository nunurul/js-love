function doLogin() {
  const ajax = new XMLHttpRequest();
  ajax.open("POST", "");

  ajax.onload = function () {
    const header = document.getElementById("response");
    header.innerText = ajax.responseText;
  };
  ajax.setRequestHeader("Content-Type", "application/json");

  const json = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  ajax.send(JSON.stringify(json));
}

document.getElementById("login").onclck = doLogin;
