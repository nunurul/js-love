const nilai = "D";

switch (nilai) {
  case "A":
    document.writeln("selamat anda lulus");
    break;
  case "B":
  case "C":
    document.writeln("anda lulus");
    break;
  case "D":
    document.writeln("terus berjuang");
    break;
  default:
    document.writeln("anda salah jurusan");
    break;
}
