document.writeln("<p>Object</p>");
document.writeln("<br />");

person = {
  firstName: "nurul",
  middleName: "nunu",
  lastName: "khoiriyah",
};

for (property in person) {
  document.writeln(`<p>${property} namanya ${person[property]}</p>`);
}

document.writeln("<br />");
document.writeln("<p>Array</p>");
document.writeln("<br />");

const human = ["nunu", "nurul", "khoiriyah"];

for (index in human) {
  document.writeln(`<p>${index} : ${human[index]}</p>`);
}
