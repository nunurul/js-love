document.writeln(`<p>Tipe data object</p>`);
const objectkosong = {};
console.info(objectkosong);

const objectproperties = {
  nama: "Nurul Khoiriyah",
  alamat: "Indonesia",
  umur: 22,
};
console.table(objectproperties);

const objecttambah = {};
objecttambah["cita cita"] = "Programmer";
objecttambah["nama panggilan"] = "uyong";
objecttambah["nama panggilan kuliah"] = "nunu";

delete objecttambah["nama panggilan"];
console.table(objecttambah);

console.info(objecttambah["cita cita"]);
console.info(objectproperties.nama);
document.writeln(`</br>`);

document.writeln(`<p>if expression</p>`);

const nilai = 90;

if (nilai > 80) {
  console.info(`Good Job`);
} else if (nilai > 60) {
  console.info(`Not Bad`);
} else {
  console.info(`Try Again`);
}
document.writeln(`</br>`);

document.writeln(`<p>Popup</p>`);
// alert(`Halooo`);

// const tanya = prompt(`Masukan nama : `);
// alert(` Haloo ${tanya}`);

const konfirmasi = confirm(`yakin ingin masuk`);

if (konfirmasi) {
  const nama = prompt("masukan nama");
  alert(`Halo ${nama}`);
} else {
  alert("Byee Byee");
}
