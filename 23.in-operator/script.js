const data = {
  firstname: "nurul",
  lastname: "khoiriyah",
};

if ("firstname" in data) {
  document.writeln(`<p>Halo ${data.firstname} ${data.lastname}</p>`);
} else {
  document.writeln(`<p>namanya nggak ada</p>`);
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

//
const cek = [undefined, null, "hai", "jelek"];
const result = 1 in cek;

document.writeln(`<p>${result}</p>`);

const wow = {
  nama: "nunu",
  umur: 22,
  negara: "indonesia",
};

const hah = "nama" in wow;
document.writeln(`<p>${hah}</p>`);
