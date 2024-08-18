{
  const array = ["nunu", "adis", "alfie"];

  array.forEach(function (value, index) {
    console.info(`${index} : ${value}`);
  });

  array.forEach((value, index) => {
    console.info(`${index} ${value}`);
  });

  array.forEach((value) => console.info(value));
}

{
  const queue = [];

  queue.push("nunu");
  queue.push("adis");
  queue.push("alfie");

  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
}

{
  const stack = [];

  stack.push("nunu");
  stack.push("adis");
  stack.push("alfie");

  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
}

{
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.info(source.find((value) => value > 3));
  console.info(source.findIndex((value) => value > 3));
  console.info(source.includes(7));
  console.info(source.indexOf(5));
  console.info(source.lastIndexOf(5));
}

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const ganjil = numbers.filter((value) => value % 2 === 0);
  const genap = numbers.filter((value) => value % 2 === 0);

  console.info(numbers);
  console.info(ganjil);
  console.info(genap);
}

{
  const names = ["nunu", "adis", "alfie"];

  const namesOrigin = names.map((value) => value);
  console.info(namesOrigin);

  const reduce = names.reduce((value, result) => value + " " + result);
  console.info(reduce);

  const reduceRight = names.reduceRight((value, right) => value + " " + right);
  console.info(reduceRight);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const total = numbers.reduce((value, result) => value + result);
  console.info(total);
}
