const data = {
  nama: "nurul",
  umur: 22,
};

if ("nama" in data) {
  document.writeln(`Hello ${data.nama}`);
} else {
  document.writeln(`Hello`);
}
