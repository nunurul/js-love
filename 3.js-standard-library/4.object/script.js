{
  // freeze

  const dingin = {
    firstName: "nurul",
    lastName: "khoiriyah",
  };

  Object.freeze(dingin);

  dingin.firstName = "nunu";
  delete dingin.lastName;
  console.info(dingin);

  // seal

  const pembungkus = {
    friends1: "adis",
    friends2: "alfie",
  };

  Object.seal(pembungkus);

  pembungkus.friends1 = "hai";
  delete pembungkus.friends2;
  console.info(pembungkus);
}

{
  // sama
  const halo = {
    firstName: "nunu",
  };

  const hai = {
    lastName: "khoiriyah",
  };

  Object.assign(halo, hai);

  console.info(halo);
  console.info(hai);

  //beda
  const kenapa = {
    hai: "hai",
  };

  const apa = {
    hai: "heh",
    halo: "halo",
  };

  Object.assign(kenapa, apa);
  console.info(kenapa);
  console.info(apa);
}

{
  const own = {
    firstName: "nurul",
    lastName: "khoiriyah",
  };

  console.info(Object.values(own));
  console.info(Object.getOwnPropertyNames(own));
}
