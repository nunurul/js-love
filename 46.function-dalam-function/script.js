function outer() {
  function inner() {
    document.writeln(`<p>halo</p>`);
  }

  inner();
  inner();
}

outer();
inner(); //ReferenceError: inner is not defined
