document.writeln(`<p>membuat object dengan method</p>`);

const o = {
  a: "nunu",
  b: function (age) {
    document.writeln(age);
  },
};

o.b(22);

document.writeln(`<br/>`);
document.writeln(`<br/>`);

document.writeln(`<p>menambahkan object ke method</p>`);

const obj = {
  nama: "nurul",
};

obj.address = function (alamat) {
  document.writeln(alamat);
};

obj.address("jalan joe kelapa 3");
