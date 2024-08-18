const title = document.getElementById("title");

title.textContent = "Hai";

const description = document.getElementById("description");

description.textContent = "nunu";

const content = document.getElementById("content");

console.info(content.id);
console.info(content.className);
console.info(content.tagName);

title.remove();
description.remove();

const create = document.getElementById("create");

const titles = document.createElement("h1");
titles.textContent = "halo";
create.appendChild(titles);

const desc = document.createElement("p");
desc.textContent = "nunu";
create.appendChild(desc);
