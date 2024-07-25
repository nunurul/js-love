const obj = {
  firstName: "nurul",
  lastName: "khoiriyah",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

document.writeln(obj.fullName);

obj.fullName = "rine alfi";
document.writeln(obj.fullName);

obj.fullName = "adi suryana";
document.writeln(obj.fullName);
