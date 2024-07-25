const names = ["nurul", "khoiriyah"];

const firstName = names[0];
document.writeln(firstName);

const lastName = names[1];
document.writeln(lastName);

const teman = ["rine", "alfi", "danis", "embran"];
const [kuliah, coc, ...ponakan] = teman;

document.writeln(kuliah);
document.writeln(coc);
document.writeln(ponakan);

document.writeln("<br />");
document.writeln("<br />");

const bio = {
  nameSatu: "nurul",
  nameDua: "khoiriyah",
  address: {
    street: "jalan joe",
    province: "jakarta",
    country: "indonesia",
  },
  hobby: "nonton",
  bahasa: "indonesia",
};

const nameAwal = bio.nameSatu;
console.info(nameAwal);

const nameAkhir = bio.nameDua;
console.info(nameAkhir);

// const { nameSatu, nameDua, address, ...others } = bio;
// console.info(nameSatu);
// console.info(nameDua);
// console.info(address);
// console.info(others);

const {
  nameSatu,
  nameDua,
  address: { street, province, country },
  ...others
} = bio;

console.info(nameSatu);
console.info(nameDua);
console.info(street);
console.info(province);
console.info(country);
console.info(others);

function displayResults({ a, b, c }) {
  console.info(a);
  console.info(b);
  console.info(c);
}

const person = {
  a: "nurul",
  b: "cantik",
  c: "khoiriyah",
};

displayResults(person);

function sum(first, second) {
  return first + second;
}

console.info(sum(10, 30));
console.info(sum(10, 8));

const oy = ["halo", "apa"];

const [halo, apa, siapa = "siapa"] = oy;

console.info(halo);
console.info(apa);
console.info(siapa);

const hei = {
  lah: "lah",
  hah: "hah",
};

const { lah, hah, woy = "woy" } = hei;

console.info(lah);
console.info(hah);
console.info(woy);

const room = {
  bedroom: "kasur",
  restroom: "sabun",
  kitchen: "panci",
};

const {
  bedroom: kamarTidur,
  restroom: kamarMandi,
  kitchen: dapur,
  park: taman = "pot",
} = room;

document.writeln(`<p>${kamarTidur}</p>`);
document.writeln(`<p>${kamarMandi}</p>`);
document.writeln(`<p>${dapur}</p>`);
document.writeln(`<p>${taman}</p>`);
