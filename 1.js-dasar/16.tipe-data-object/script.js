const object = {};

object["nama"] = "nurul";
object["umur"] = 22;
object["negara"] = "indonesia";
object["status"] = "single";

console.table(object);

delete object["status"];

console.table(object);

const biodata = {
  nama: "nurul khoiriyah",
  umur: 22,
  negara: "Indonesia",
  "cita cita": "programmer",
};

console.table(biodata);

console.info(biodata.nama);
console.info(biodata.umur);
console.info(biodata.negara);
console.info(biodata["cita cita"]);
