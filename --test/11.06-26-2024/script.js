document.writeln("<p>funtion recursive</p>");
document.writeln("<p>factorial loop</p>");

function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

document.writeln(factorial(7));

document.writeln("<p>factorial recursive</p>");

function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

document.writeln(factorialRecursive(7));

document.writeln(`<br />`);
document.writeln(`<br />`);
document.writeln("<p>funtion generator</p>");
document.writeln("<p>funtion generator sederhana</p>");

function* createNames() {
  yield "nunu";
  yield "nurul";
  yield "uyong";
}

const names = createNames();

for (const name of names) {
  document.writeln(name);
}

document.writeln("<p>funtion generator kompleks</p>");

function* createNumbers(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const numbers = createNumbers(8);

for (const number of numbers) {
  document.writeln(number);
}

document.writeln(`<br />`);
document.writeln(`<br />`);
document.writeln("<p>arrow funtion</p>");
document.writeln("<p>arrow funtion asli</p>");

const sayHello = (nama) => {
  const say = `Halo nama saya ${nama}`;
  document.writeln(say);
};

sayHello("nurul");

document.writeln("<p>arrow funtion tanpa block</p>");
const sayNama = (nama) => document.writeln(nama);
sayNama("nunuy");
document.writeln("<p>arrow funtion return value</p>");
const sum = (first, second) => first + second;
document.writeln(sum(10, 70));
document.writeln("<p>arrow funtion tanpa kurung parameter</p>");
const hai = (name) => document.writeln(`hai aku ${name}`);
hai("nurul");
document.writeln("<p>arrow funtion sebagai parameter</p>");
const giveMeName = (callback) => {
  callback("nunu");
};

giveMeName((name) => document.writeln(name));
document.writeln(`<br />`);
