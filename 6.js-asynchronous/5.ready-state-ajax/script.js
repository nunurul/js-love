const ajax = new XMLHttpRequest();
ajax.open("GET", "/6.js-asynchronous/api/halo.json");

function displayResponse(json) {
  const header = document.getElementById("response");
  header.textContent = json.response;
}

ajax.onreadystatechange = function () {
  console.info(`Ready State Change ${ajax.readyState}`);
};

ajax.addEventListener("load", function () {
  if (ajax.status === 200) {
    const json = JSON.parse(ajax.responseText);
    displayResponse(json);
  } else {
    displayResponse({
      response: `Terjadi kesalahan dengan status ${ajax.status}`,
    });
  }
});

ajax.send();
