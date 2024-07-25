function introduce(name, gender = "unknown") {
  document.writeln(`<p>nama : ${name}, gender : ${gender}</p>`);
}

introduce("nurul", "female");
introduce("nunu");
introduce();
introduce("nunu", undefined);
