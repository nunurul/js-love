document.writeln(`<p>Kode : Masalah Tanpa Konversi</p>`);

const value = 1;
const value2 = "1";

const hasil = value + value2;
document.writeln(`<p>${hasil} </p>`);

document.writeln(`</br>`);

document.writeln(`<p>Kode : Dengan Konversi</p>`);

const nilai1 = "1.8";

document.writeln(`<p>${parseInt(nilai1)}</p>`);
document.writeln(`<p>${parseFloat(nilai1)}</p>`);
document.writeln(`<p>${Number(nilai1)}</p>`);

const a = 2;
const b = 4;

const jumlah = a.toString() + b;

document.writeln(`<p>${jumlah}</p>`);

const d = "3";
const c = 2;

const hasill = parseInt(d) + c;

document.writeln(`<p>${hasill}</p>`);

document.writeln(`</br>`);

document.writeln(`<p>Kode : Masalah Tanpa Konversi</p>`);
document.writeln(`<p>${parseFloat("2text")}</p>`);
document.writeln(`<p>${parseFloat("text2")}</p>`);
document.writeln(`<p>${parseFloat("text")}</p>`);
document.writeln(`<p>${Number("text")}</p>`);
document.writeln(`<p>${Number("2text")}</p>`);
document.writeln(`<p>${Number("2.1text")}</p>`);

document.writeln(`<p>Kode : Masalah Tanpa Konversi</p>`);
const x = parseInt("text");
const y = 3;

const z = x + y;
document.writeln(`<p>${z}</p>`);

document.writeln(`<p>Kode : is NAN</p>`);

document.writeln(`<p>${isNaN(x)}</p>`);
document.writeln(`<p>${isNaN(y)}</p>`);
