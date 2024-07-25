function iya(name) {
  document.writeln(`<p>${name}</p>`);
}

const hah = iya;

hah("nurul");
iya("nunu");

let ayo = iya;

function giveMeName(callback) {
  callback("Nunu");
}

giveMeName(ayo);
giveMeName(iya);
