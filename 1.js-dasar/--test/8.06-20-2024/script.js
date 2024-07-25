document.writeln(`<p>For In</p>`);
document.writeln(`<p>For In di Object</p>`);
const forin = {
  firstName: "nurul",
  lastName: "khoiriyah",
};

for (infor in forin) {
  document.writeln(`<p>${infor} : ${forin[infor]}</p>`);
}
document.writeln(`<p>For In di Array</p>`);
const arrayin = ["nurul", "khoiriyah"];
for (inarray in arrayin) {
  document.writeln(`<p>${inarray} : ${arrayin[inarray]}</p>`);
}
document.writeln(`<br />`);

document.writeln(`<p>For Of</p>`);
document.writeln(`<p>For Of di Array</p>`);
const arrayof = ["nurul", "khoiriyah"];
for (ofarray of arrayof) {
  document.writeln(`<p>${ofarray}</p>`);
}
document.writeln(`<p>For Of di String</p>`);
const stringof = "nurul";
for (ofstring of stringof) {
  document.writeln(`<p>${ofstring}</p>`);
}

document.writeln(`<br />`);

document.writeln(`<p>With Statement</p>`);
document.writeln(`<p>With Statement Asli</p>`);
const statement = {
  firstName: "nurul",
  lastName: "khoiriyah",
};

with (statement) {
  document.writeln(`<p>${firstName}</p>`);
  document.writeln(`<p>${lastName}</p>`);
}
document.writeln(`<p>With Statement Tidak Direkomendasikan</p>`);
const statementw = {
  firstName: "nurul",
  lastName: "khoiriyah",
};

const firstName = "nunuk";

with (statementw) {
  document.writeln(`<p>${firstName}</p>`);
  document.writeln(`<p>${lastName}</p>`);
}
document.writeln(`<br />`);

document.writeln(`<p>Fuction</p>`);

function hai() {
  document.writeln(`<p>Hai</p>`);
}

hai();
hai();

document.writeln(`<br />`);

document.writeln(`<p>Function Paramether</p>`);

function halo(nama, umur) {
  document.writeln(`<p>halo nama saya  ${nama}, umur saya ${umur}</p>`);
}

halo("nurul", 22);
halo("uyong", 17);
document.writeln(`<br />`);
