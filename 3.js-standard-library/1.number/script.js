const input = "123456";
const number = Number(input);

console.info(number);
console.info(typeof number);
console.info(typeof input);
console.info(Number("salah"));

console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MAX_SAFE_INTEGER);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.NaN);

const data = Number(`12345`);

console.info(Number.isInteger(data));
console.info(Number.isNaN(data));

const value = Number("12345");

console.info(value.toString(2));
console.info(value.toLocaleString("id-ID"));
console.info(value.toLocaleString("en-US"));
