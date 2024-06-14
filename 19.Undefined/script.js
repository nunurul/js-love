let nama;

if (nama === undefined) {
  document.writeln(`<p>Undefined</p>`);
} else {
  document.writeln(`<p>Defined</p>`);
}
let names = ["nunu", "nunuy", "nunuk"];

if (names[2] === undefined) {
  document.writeln(`<p>Halo Undefined</p>`);
} else [document.writeln(`<p>Halo ${names[2]}</p>`)];

let object = {};

if (object.person === undefined) {
  document.writeln(`<p>object nya nggak ada</p>`);
} else {
  document.writeln(`<p>object ada</p>`);
}
