document.writeln(`<p>Tanpa Operator Ternary</p>`);

const nilai = 75;
let ucapan;

if (nilai >= 75) {
  ucapan = "Anda Lulus";
} else {
  ucapan = "Anda gagal";
}

document.writeln(`<p>${ucapan}</p>`);

document.writeln(`<p>Dengan Operator Ternary</p>`);

const nilai2 = 60;
const ucapan2 = nilai2 >= 70 ? "anda lulus" : "anda gagal";

document.writeln(`<p>${ucapan2}</p>`);
