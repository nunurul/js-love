{
  const firstName = Symbol("firstname");
  const lastName = Symbol("lastname");

  const person = {};
  person.firstName = "halo";
  person.lastName = "apa";

  console.info(person);
}

{
  console.info(Symbol.for("halo") === Symbol.for("halo"));

  const person = {};
  person[Symbol.for("firstname")] = "halo";
  person[Symbol.for("lastname")] = "apa";

  console.info(person);
}
