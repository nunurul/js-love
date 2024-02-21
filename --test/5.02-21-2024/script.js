// undefines

let apa;

if (apa === undefined) {
  document.writeln("undefines");
} else {
  document.writeln("defined");
}

let suhu = [];
let derajat = [];

if (suhu === undefined) {
  document.writeln("undefiened");
} else {
  document.writeln("undefiened");
}

// null
let halo = "halo";

if (halo === null) {
  document.writeln(`<p>Null</p>`);
} else if (halo === undefined) {
  document.writeln(`<p>Undefined</p>`);
} else {
  document.writeln(`<p>Ada Isinya</p>`);
}

// switch expression

let nilai = "A";

switch (nilai) {
  case "A":
    document.writeln("nilai A");
    break;
  case "B":
    document.writeln("nilai B");
    break;
  case "C":
    document.writeln("nilai C");
    break;
  case "D":
    document.writeln("nilai D");
    break;
  default:
    document.writeln(`Halo aku dari masa depan`);
}

// operator type

let tipe = true;

if (typeof tipe === "string") {
  document.writeln(`<p>Ini String</p>`);
} else if (typeof tipe === "number") {
  document.writeln(`<p>Ini Number</p>`);
} else if (typeof tipe === "boolean") {
  document.writeln(`<p>Ini Boolean</p>`);
} else if (typeof tipe === "object") {
  document.writeln(`<p>Ini Object</p>`);
} else if (typeof tipe === "undefined") {
  document.writeln(`<p>Ini Undefined</p>`);
} else if (typeof tipe === "null") {
  document.writeln(`<p>Ini Null</p>`);
} else {
  document.writeln(`<p>Bukan tipe data</p>`);
}

// in operator

let susu = ["coklat", "vanila", "strawberry"];
document.writeln(`<p>${3 in susu}</p>`);

let makanan = { roti: undefined, pizaa: "papperoni", buah: "salak" };
document.writeln(`<p>${"roti" in makanan}</p>`);
