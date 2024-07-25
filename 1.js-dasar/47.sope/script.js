let counter = 0;

function hitme() {
  counter++;
}

hitme();
hitme();

document.writeln(counter);

function first() {
  let firstvar = "variable pertama";
  console.info(firstvar);
}

function second() {
  let secondvar = "variable second";
  console.info(secondvar);
  //   console.info(firstvar);
}

first();
second();

// console.info(firstvar);
// console.info(secondvar);

function firstNested() {
  let char = "halo";
  function secondNested() {
    document.writeln(char);
  }
  secondNested();
}

firstNested();
