const ajax = new XMLHttpRequest();
ajax.open("GET", "/6.js-asynchronous/api/halo.json");

ajax.addEventListener("load", function () {
  const json = JSON.parse(ajax.responseText);

  const header = document.getElementById("response");
  header.textContent = json.response;
});

ajax.send();
