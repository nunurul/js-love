document.writeln(`<p></p>`);

document.writeln(`<p>Function Return Value</p>`);
document.writeln(`<p>Return Value Asli</p>`);
function halo(nama, umur) {
  const say = `<p>nama saya ${nama}, umur saya ${umur}</p>`;
  return say;
}

const hai = halo("nurul", 22);
document.writeln(`<p>${hai}</p>`);
document.writeln(`<p>Return Value Lebih dari Satu</p>`);

function nilai(value) {
  if (value >= 90) {
    return "A";
  } else if (value >= 80) {
    return "B";
  } else if (value >= 70) {
    return "C";
  } else if (value >= 60) {
    return "D";
  } else {
    return "E";
  }
}

const hasil = nilai(90);
document.writeln(`<p>${hasil}</p>`);

document.writeln(`<p>Menghentikan return</p>`);
function hah(array, searchValue) {
  for (element of array) {
    if (searchValue === element) {
      return true;
    }
  }
  return false;
}

const yay = [3, 4, 5, 6, 7, 8];
const yoy = 9;

const nah = hah(yay, yoy);
document.writeln(`<p>${nah}</p>`);

document.writeln(`<br />`);

document.writeln(`<p>Optional Pharameter</p>`);
function opsi(nama, status) {
  document.writeln(`<p>${nama} ${status}</p>`);
}

opsi("nurul");
document.writeln(`<br />`);

document.writeln(`<p>Default Pharameter</p>`);
function defaullt(nama, citacita = "nganggur") {
  document.writeln(`<p>${nama} ${citacita}</p>`);
}

defaullt("nurul");
document.writeln(`<br />`);

document.writeln(`<p>Rest Pharameter</p>`);
document.writeln(`<p>Rest Pharameter Asli</p>`);
function yey(buah, ...data) {
  let total = 0;
  for (item of data) {
    total += item;
  }
  document.writeln(`<p>${buah}, total = ${total}</p>`);
}

yey("APPLE", 2, 3, 7);

document.writeln(`<p>Spread Syntax Rest Pharameter</p>`);
function poll(buah, ...data) {
  let total = 0;
  for (item of data) {
    total += item;
  }
  document.writeln(`<p>${buah}, total = ${total}</p>`);
}

poll("APPLE", ...[2, 3, 7]);

document.writeln(`<p>Arguments Objects</p>`);
function argu() {
  let total = 0;
  for (item of arguments) {
    total += item;
  }
  document.writeln(`<p>${total}</p>`);
}

argu(2, 3, 4, 5, 6);

document.writeln(`<br />`);
