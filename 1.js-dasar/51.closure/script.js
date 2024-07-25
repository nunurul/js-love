function createAdder(value) {
  const owner = "nunu";
  function add(param) {
    document.writeln(owner);
    return value + param;
  }
  return add;
}

const fullData = createAdder(10);
document.writeln(`<p>${fullData(8)}</p>`);
document.writeln(`<p>${fullData(17)}</p>`);
