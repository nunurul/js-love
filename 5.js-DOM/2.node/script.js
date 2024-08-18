const menu = document.getElementById("menu");
console.info(menu);
console.info(menu.children);

const third = document.getElementById("third");
console.info(third);
console.info(third.textContent);
console.info(third.previousSibling.previousSibling);
console.info(third.nextSibling.nextSibling);

menu.removeChild(document.getElementById("first"));
menu.removeChild(document.getElementById("second"));
menu.removeChild(document.getElementById("third"));
