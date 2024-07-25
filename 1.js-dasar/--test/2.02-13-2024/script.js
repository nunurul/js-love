// operasi artitmatika

document.writeln(`<p>Aritmatika</p>`);
document.writeln(`</br>`);

let angka1 = 5;
let angka2 = 7;

let jumlah1 = 5 + 7;
document.writeln(`<p> ${jumlah1} </p>`);

let angka3 = 5;
let angka4 = 7;

let jumlah2 = 5 - 7;
document.writeln(`<p> ${jumlah2} </p>`);

let angka5 = 5;
let angka6 = 7;

let jumlah3 = 5 * 7;
document.writeln(`<p> ${jumlah3} </p>`);

let angka7 = 5;
let angka8 = 7;

let jumlah4 = 5 ** 7;
document.writeln(`<p> ${jumlah4} </p>`);

let angka9 = 5;
let angka10 = 7;

let jumlah5 = 5 / 7;
document.writeln(`<p> ${jumlah5} </p>`);

let angka11 = 5;
let angka12 = 7;

let jumlah6 = 5 % 7;
document.writeln(`<p> ${jumlah6} </p>`);

// operasi augmented assigsment

document.writeln(`</br>`);
document.writeln(`<p>Augmented Assigsment</p>`);

let nilai = 10;

let nilai1 = (nilai += 10);
document.writeln(`<p>${nilai1}</p>`);

let nilai2 = (nilai -= 10);
document.writeln(`<p>${nilai2}</p>`);

let nilai3 = (nilai *= 10);
document.writeln(`<p>${nilai3}</p>`);

let nilai4 = (nilai **= 10);
document.writeln(`<p>${nilai4}</p>`);

let nilai5 = (nilai /= 10);
document.writeln(`<p>${nilai5}</p>`);

let nilai6 = (nilai %= 10);
document.writeln(`<p>${nilai6}</p>`);

// operasi unary

document.writeln(`</br>`);
document.writeln(`<p>Unary</p>`);

let number = +17;
document.writeln(`<p>${number}</p>`);

let number1 = -number;
document.writeln(`<p>${number1}</p>`);

let number2 = ++number;
document.writeln(`<p>${number2}</p>`);

let number3 = --number;
document.writeln(`<p>${number3}</p>`);

// operator perbandingan

document.writeln(`</br>`);
document.writeln(`<p>Perbandingan</p>`);

let perbandingan = 2 < 4;
document.writeln(`<p>${perbandingan}</p>`);

let perbandingan1 = 2 > 4;
document.writeln(`<p>${perbandingan1}</p>`);

let perbandingan2 = 2 >= 4;
document.writeln(`<p>${perbandingan2}</p>`);

let perbandingan3 = 2 <= 4;
document.writeln(`<p>${perbandingan3}</p>`);

let perbandingan4 = 4 == "4";
document.writeln(`<p>${perbandingan4}</p>`);

let perbandingan5 = 4 === "4";
document.writeln(`<p>${perbandingan5}</p>`);

let perbandingan6 = 4 != "4";
document.writeln(`<p>${perbandingan6}</p>`);

let perbandingan7 = 4 !== "4";
document.writeln(`<p>${perbandingan7}</p>`);

// operator logika

document.writeln(`</br>`);
document.writeln(`<p>Logika</p>`);

const tes1 = 90;
const tes2 = 70;

const hasiltes1 = tes1 >= 80;
const haseiltes2 = tes2 >= 85;

const penentuan = hasiltes1 && haseiltes2;
document.writeln(`<p>${penentuan}</p>`);

const penentuan2 = hasiltes1 || haseiltes2;
document.writeln(`<p>${penentuan2}</p>`);

const ayo = 2 == "2";
const penentuan3 = !ayo;
document.writeln(`<p>${penentuan3}</p>`);

// console

console.info(`ini console info`);
console.warn(`ini console warn`);
console.error(`ini console error`);
console.table(`ini console table`);
console.debug(`ini console debug`);

// string template

document.writeln(`</br>`);
document.writeln(`<p>String Template</p>`);

let nama = "nurul";
document.writeln(`<p>halon ${nama}</p>`);

document.writeln(`<p>halo aku mau ngetik panjang,
dengan menggunakan multiline dari string template, 
demi dah ini keren banget</p>`);

document.writeln(`<p>${penentuan3}</p>`);
