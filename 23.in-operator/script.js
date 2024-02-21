const data = {
  nama: "nurul",
  umur: 22,
};

if ("nama" in data) {
  document.writeln(`Hello ${data.nama}`);
} else {
  document.writeln(`Hello`);
}

//

const names = {
  firstName: "nurul",
  middleName: undefined,
  lastName: "khoiriyah",
};

if ("lastName" in names) {
  document.writeln("<p>ada anjay</p>");
} else {
  document.writeln("<p>nggak ada</p>");
}

const lengkap = [undefined, "Halo", null];

const hasil = 2 in lengkap;

if (hasil) {
  document.writeln("<p>Apa</p>");
} else {
  document.writeln("<p>Iya</p>");
}
