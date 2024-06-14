let nilai = [];

if (typeof nilai === "string") {
  document.writeln("ini string");
} else if (typeof nilai === "number") {
  document.writeln("ini number");
} else if (typeof nilai === "boolean") {
  document.writeln("ini boolean");
} else if (typeof nilai === "object") {
  document.writeln("ini object");
} else {
  document.writeln("undefined");
}
