function useStrictMode() {
  "use strict";
  const person = {
    name: "nunu",
  };
  with (person) {
    document.writeln(name);
  }
}

useStrictMode();
