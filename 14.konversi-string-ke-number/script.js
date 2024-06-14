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
document.writeln("</br>");

const a = 5;
const b = 4;

const total = a.toString() + b;
document.writeln(total);

const d = "3";
const c = 2;

const hasill = parseInt(d) + c;

document.writeln(`<p>${hasill}</p>`);

document.writeln(`</br>`);

document.writeln(`<p>Kode : Masalah Tanpa Konversi</p>`);
document.writeln(`<p>${parseInt("2text")}</p>`);
document.writeln(`<p>${parseFloat("22text")}</p>`);
document.writeln(`<p>${Number("3text")}</p>`);
document.writeln(`${parseInt("hai2")}`);

document.writeln("</br>");
document.writeln("</br>");

document.writeln(`<p>Kode : Masalah Tanpa Konversi</p>`);
const x = parseInt("text");
const y = 3;

const z = x + y;
document.writeln(`<p>${z}</p>`);

document.writeln(`<p>Kode : is NAN</p>`);

document.writeln(`<p>${isNaN(x)}</p>`);
document.writeln(`<p>${isNaN(y)}</p>`);

const n = Number("haha");
const m = 200;

const o = m + n;
document.writeln(`<p>${o}</p>`);
document.writeln(`<p>${isNaN(m)}</p>`);
document.writeln(`<p>${isNaN(n)}</p>`);
