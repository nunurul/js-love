// number
const input = "123456";
const number = Number(input);

console.info(number);
console.info(typeof number);
console.info(typeof input);
console.info(Number("salaj"));

console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);
console.info(Number.NaN);

const data = Number("12345");

console.info(Number.isInteger(data));
console.info(Number.isNaN(data));

const value = Number("12345");

console.info(value.toString(2));
console.info(value.toLocaleString("id-ID"));
console.info(value.toLocaleString("en-US"));

// string

const nama = "Nurul Khoiriyah";

console.info(nama.length);
console.info(nama.toLocaleLowerCase());
console.info(nama.toLocaleUpperCase());
console.info(nama.split(" "));

const word = "    halo     ";

console.info(word.trim());

// array

{
  const nama = ["nurul", "nama", "saya"];

  nama.forEach(function (value, index) {
    console.info(index, value);
  });

  nama.forEach((value, index) => {
    console.info(index, value);
  });

  nama.forEach((value) => console.info(value));
}

{
  const queue = [];

  queue.push("nurul");
  queue.push("iya");
  queue.push("kenapa");

  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
}

{
  const stack = [];

  stack.push("nunu");
  stack.push("halo");
  stack.push("apa");

  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
}

{
  const source = [1, 2, 3, 4, 7, 8, 9, 4, 5];

  console.info(source.find((value) => value > 3));
  console.info(source.findIndex((value) => value > 3));
  console.info(source.includes(5));
  console.info(source.indexOf(5));
  console.info(source.lastIndexOf(7));
}

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const genap = numbers.filter((value) => value % 2 === 0);
  const ganjil = numbers.filter((value) => value % 2 === 1);

  console.info(numbers);
  console.info(genap);
  console.info(ganjil);
}

{
  const names = ["nurul", "nama", "saya"];

  names.map((value) => {
    console.info(value);
  });

  names.reduce((value, reduce) => {
    console.info(value + " " + reduce);
  });

  const reduce = names.reduce((value, reduce) => value + " " + reduce);
  console.info(reduce);

  const reduceRight = names.reduceRight(
    (value, result) => value + " " + result
  );
  console.info(reduceRight);

  const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const jumlah = angka.reduce((value, result) => value + result);
  console.info(jumlah);
}

// object

{
  // freeze

  const dingin = {
    firstName: "nurul",
    lastName: "khoiriyah",
  };

  Object.freeze(dingin);

  dingin.firstName = "nunu";
  delete dingin.lastName;
  console.info(dingin);

  // seal

  const pembungkus = {
    firstName: "nurul",
    lastName: "khoiriyah",
  };

  Object.seal(pembungkus);

  pembungkus.firstName = "nunu";
  delete pembungkus.lastName;
  console.info(pembungkus);
}

{
  // sama

  const halo = {
    firstName: "nurul",
  };

  const hai = {
    lastName: "khoiriyah",
  };

  // Object.assign(halo, hai);
  Object.assign(hai, halo);

  console.info(halo);
  console.info(hai);

  // beda
  const kenapa = {
    hai: "haip",
  };

  const apa = {
    hai: "haii",
    heh: "heh",
  };

  Object.assign(kenapa, apa);
  // Object.assign(apa, kenapa);
  console.info(kenapa);
  console.info(apa);
}

{
  const own = {
    bird: "angsa",
    fish: "kerapu",
  };

  console.info(Object.values(own));
  console.info(Object.getOwnPropertyNames(own));
}

// json

const bio = {
  firstName: "nurul",
  lastName: "khoiriyah",
  address: {
    city: "Jakarta",
    province: "DKI Jakarta",
  },
  hobbies: ["listening music", "watching mpl"],
};

const stringify = JSON.stringify(bio);
const parse = JSON.parse(stringify);
const array = JSON.stringify([bio]);

console.info(stringify);
console.info(parse);
console.info(array);

// BigInt
const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MIN_SAFE_INTEGER);

const c = a + b;
console.info(c);
console.info(typeof c);
