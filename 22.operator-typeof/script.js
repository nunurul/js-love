let nilai = { nama: "nurrul" };

if (typeof nilai === "string") {
  document.writeln("ini adalah string");
} else if (typeof nilai === "number") {
  document.writeln("ini adalah number");
} else if (typeof nilai === "boolean") {
  document.writeln("ini adalah boolean");
} else if (typeof nilai === "object") {
  document.writeln("ini adalah object");
} else {
  document.writeln("ini undefined");
}
