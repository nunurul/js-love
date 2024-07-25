document.writeln(`<p>Tipe Data Array</p>`);

const tipe = [];
const nama = ["nunu", "nurul", "nunuk"];
document.writeln(`<br />`);

document.writeln(`<p>Kode: Menambah Data Array</p>`);

const names = [];

names.push("nunuk");
names.push("nunu", "uyong");

console.table(names);

console.info(names.length);
console.info(names[1]);
console.info(names[0]);
console.info(names[2]);

names[1] = "nurul";
names[2] = "khoiriyah";

console.table(names);

names.push("halo");
names.push("aku");
names.push("hidup");

console.table(names);

delete names[5];
delete names[4];
names.push(1, 2, 4);
names.push(["nurul", "khoiriyah"]);
console.table(names);

names[4] = "cantik";
names[5] = "banget";
names.push([18, true]);

console.table(names);
