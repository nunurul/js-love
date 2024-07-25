function factorial(value) {
  let hasil = 1;
  for (let i = 1; i <= value; i++) {
    hasil *= i;
  }
  return hasil;
}

document.writeln(factorial(7));

function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

document.writeln(factorialRecursive(7));
