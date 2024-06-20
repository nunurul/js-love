document.writeln(`<p>Tanpa With Statement</p>`);

const hah = {
  firstName: "nurul",
  middleName: "nunu",
  lastName: "khoiriyah",
};

document.writeln(`<p>${hah.firstName}</p>`);
document.writeln(`<p>${hah.middleName}</p>`);
document.writeln(`<p>${hah.lastName}</p>`);

document.writeln(`<br />`);
document.writeln(`<p>With Statement</p>`);
const hoh = {
  firstName: "nurul",
  middleName: "nunu",
  lastName: "khoiriyah",
};

with (hoh) {
  document.writeln(`<p>${firstName}</p>`);
  document.writeln(`<p>${middleName}</p>`);
  document.writeln(`<p>${lastName}</p>`);
}

document.writeln(`<br />`);
document.writeln(`<p>Ambigu di With Statement</p>`);
const hih = {
  firstName: "nurul",
  middleName: "nunu",
  lastName: "khoiriyah",
};

const firstName = "nunuy";
const lastName = "nunuk";

with (hih) {
  document.writeln(`<p>${firstName}</p>`);
  document.writeln(`<p>${middleName}</p>`);
  document.writeln(`<p>${lastName}</p>`);
}
