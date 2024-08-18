function text() {
  const tulisan = document.createElement("h1");
  tulisan.textContent = "Hai apa kabar";

  document.body.appendChild(tulisan);
}

setTimeout(text, 2000);

function time() {
  const waktu = document.getElementById("time");
  waktu.textContent = new Date().toString();
}

setInterval(time, 1000);
