let halo = function (nama) {
  document.write(`<p>${nama}</p>`);
};

halo("nurul");

function giveMeName(callback) {
  callback("nunu");
}

giveMeName(function (name) {
  document.writeln(`<p>${name}</p>`);
});

giveMeName(halo);
giveMeName(halo);
