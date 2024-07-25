function halo(nama, umur) {
  const nyapa = document.writeln(
    `<p>perkenalkan nama saya ${nama}, umur saya ${umur}</p>`
  );
  return nyapa;
}

const introduce = halo("nurul", 22);
document.writeln(`<p>${introduce}</p>`);

function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say;
}

const result = sayHello("Halo", "Hai");
document.writeln(`<p>${result}</p>`);

function brand(food, drink) {
  const name = `${food}, ${drink}`;
  return name;
}

const buy = brand("tango", "pocari");
document.writeln(`<p>${buy}</p>`);

function getValue(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "E";
  }
}

const hasil = getValue(85);
document.writeln(`<p>${hasil}</p>`);

function halo(angka, searchValue) {
  for (number of angka) {
    if (number === searchValue) {
      return true;
    }
  }
  return false;
}

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchValue = 12;

const hei = halo(angka, searchValue);
document.writeln(`<p>${hei}</p>`);
