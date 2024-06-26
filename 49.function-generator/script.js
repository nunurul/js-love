function* generator() {
  yield "nunu";
  yield "nurul";
  yield "uyong";
}

let names = generator();

for (nama of names) {
  document.writeln(`<p>${nama}</p>`);
}

function* kompleks(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

let lah = kompleks(100);

for (loh of lah) {
  document.writeln(`<p>${loh}</p>`);
}
