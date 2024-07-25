let nama;
let hasil = nama;

if (hasil === undefined || hasil === null) {
  hasil = "Nilai Default";
}

document.writeln(`<p>${hasil}</p>`);

let hai;
let halo = hai ?? "Hah";
document.writeln(halo);
