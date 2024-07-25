const Nama = "Nurul Khoiriyah";
const Umur = 22;
const citaCita = "Programmer";
const value = 90;
const template = `Nama : ${Nama}, Umur : ${Umur}, Cita-cita: ${citaCita}, nilai ${
  value > 75
}`;

console.info(template);

const multilinestring = `halo 
apa kabar
kamu jahat
aku bukan milikmu`;

document.writeln("<prev>");
document.writeln(multilinestring);
document.writeln("</prev>");

let nama = "nunu";
let namaAwal = "nurul";
let namaAkhir = "khoiriyah";

console.info(`Nama saya : ${nama}`);
console.info(`Nama lengkap saya : ${namaAwal} ${namaAkhir}`);

let nilai = 90;
let template2 = `nama saya : ${nama}, saya ${nilai > 70}`;

console.info(template2);

const multilinestring2 = `ini namanya
multilistring ya, 
udah gitu aja
`;

console.info(multilinestring2);
