const name = (nama) => document.writeln(`<p>hai ${nama}</p>`);
name("nunu");

const namos = (nama) => {
  document.writeln(`<p>hai ${nama}</p>`);
};
namos("nunu");

const nyapa = (halo) => {
  document.writeln(`<p> hai ${halo}</p>`);
};

nyapa("halo");

const sum = (first, second) => first + second;

document.writeln(sum(100, 100));

const iya = (hei) => document.writeln(`<p>halo ${hei}</p>`);
iya("haha");

function giveMeName(callback) {
  callback("nunuy");
}

giveMeName((name) => document.writeln(`<p>halo ${name}</p>`));
