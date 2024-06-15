document.writeln(`<p>Operator Tenary</p>`);
let nilai = 70;
let kkm = nilai > 75;
let hasil = kkm ? "lulus" : "nggak";
document.writeln(`<p>${hasil}</p>`);
document.writeln("<br />");

document.writeln(`<p>Operator Nulish Coalecing</p>`);
let ayam;
let hewan = ayam ?? "hah kosong";
document.writeln(`<p>${hewan}</p>`);
document.writeln("<br />");

document.writeln(`<p>Optional Chaining</p>`);
let objek = {};
document.writeln(`<p>${objek?.country?.person}</p>`);
document.writeln("<br />");

document.writeln(`<p>Falsy and Truthy</p>`);
let data;

if (data) {
  document.writeln("<p>True</p>");
} else {
  document.writeln("<p>False</p>");
}

document.writeln("<br />");

document.writeln(`<p>Operator Logika di Non Boolean</p>`);
console.info("OR");
console.info("hello" || ""); //"hello"
console.info("0" || "nol"); //"0"
console.info("" || []); //[]
console.info(0 || "nol");
("nol");
console.info(null || "null");
("null");
console.info(undefined || "undefined");
("undefined");
console.info(0 || false); //false
console.info("AND");
console.info("hello" && ""); //""
console.info("" && []); //""
console.info("0" && "nol"); //"nol"
console.info(0 && "nol"); //0
console.info(null && "null"); //null
console.info(undefined && "undefined"); //undefined
console.info("null" && "undefined"); //"undefined"
