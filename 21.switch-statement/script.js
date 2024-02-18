const nilai = "E";

switch (nilai) {
  case "A":
    document.writeln("selamat anda lulus");
    break;
  case "B":
  case "C":
    document.writeln("harus usaha lagi");
    break;
  case "D":
    document.writeln("maaf kamu gagal");
    break;
  default:
    document.writeln("sepertinya kamu salah jurusan");
}
