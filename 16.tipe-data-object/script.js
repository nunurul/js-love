const object = {};

object["nama"] = "Nurul";
object["alamat"] = "Indonesia";
object["umur"] = 22;
object["pacar"] = "single";

delete object["pacar"];

console.table(object);

const object1 = {
  nama: "nurul khoiriyah",
  alamat: "Indonesia",
  umur: 20,
  "cita cita": "Pemrogrammer sukses",
};

console.table(object1);

console.info(`Nama : ${object1.nama}`);
console.info(`Alamat : ${object1.alamat}`);
console.info(`Umur : ${object1.umur}`);
console.info(`Cita cita : ${object1["cita cita"]}`);
