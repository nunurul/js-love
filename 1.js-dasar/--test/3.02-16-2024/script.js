document.writeln(`<p>Test 3</p>`);
document.writeln(`<br />`);

document.writeln(`<p>Konversi String dan Number</p>`);
document.writeln(`<br />`);
document.writeln(`<p>Masalah Tanpa Konversi</p>`);
const a = "1";
const b = 3;

const c = a + b;
document.writeln(`<p>${c}</p>`);
document.writeln(`<p>${parseInt("2.3")}</p>`);
document.writeln(`<p>${parseFloat("2.3")}</p>`);
document.writeln(`<p>${Number("2.3")}</p>`);
document.writeln(`<p>${b.toString() + 2}</p>`);

document.writeln(`<br />`);
document.writeln(`<p>NAN</p>`);
document.writeln(`<p>${parseFloat("2.4text")}</p>`);
document.writeln(`<p>${parseInt("2text")}</p>`);
document.writeln(`<p>${Number("2.4text")}</p>`);
document.writeln(`<p>${Number("text2.4")}</p>`);
document.writeln(`<p>${isNaN(Number("2.4text"))}</p>`);
document.writeln(`<p>${isNaN(c)}</p>`);
document.writeln(`<br />`);

document.writeln(`<p>Tipe Data Array</p>`);
const arrayo = [];
const arrayIsi = ["nunu", "nurul"];

console.table(arrayIsi);

arrayIsi.push("cantik");
arrayIsi.push(true);
console.table(arrayIsi);

console.info(arrayIsi.length);

arrayIsi[2] = "manis";
console.table(arrayIsi);

console.info(arrayIsi[1]);

delete arrayIsi[1];
console.table(arrayIsi);
