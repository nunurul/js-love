document.writeln(`<p>Function Sebagai Value</p>`);
document.writeln(`<p>Function di Variable</p>`);
function hai() {
  document.writeln(`<p>Halo Kamu</p>`);
}

let oiy = hai;
oiy();
hai();

document.writeln(`<p>Function di Parameter</p>`);

function y(callback) {
  callback("nunu");
}

y(oiy);
y(hai);

document.writeln(`<br />`);

document.writeln(`<p>Anonymous Function</p>`);
document.writeln(`<p>Function di Variable</p>`);
let say = function (nama) {
  document.writeln(`<p>halo ${nama}</p>`);
};

say("nunu");

document.writeln(`<p>Function di Parameter</p>`);
function giveMeName(callback) {
  callback("nurul");
}

giveMeName(function (name) {
  document.writeln(`<p>halo ${name}</p>`);
});

document.writeln(`<br />`);

document.writeln(`<p>Function dalam Function</p>`);
function outer() {
  function inner() {
    document.writeln(`<p>hai</p>`);
  }

  inner();
  inner();
}

outer();
outer();

document.writeln(`<br />`);

document.writeln(`<p>Scope</p>`);
document.writeln(`<p>Global Scope</p>`);
function global() {
  document.writeln(`<p>ini global</p>`);
}

global();

document.writeln(`<p>Local Scope</p>`);

function local() {
  let vari = "ini local";
  document.writeln(`<p>${vari}</p>`);
}

local();

document.writeln(`<p>Nested Scope</p>`);
function scope() {
  let sco = "ini nested";

  function nested() {
    document.writeln(`<p>${sco}</p>`);
  }

  nested();
}

scope();
document.writeln(`<br />`);
