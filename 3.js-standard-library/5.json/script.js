const bio = {
  firstName: "nurul",
  lastName: "khoiriyah",
  address: {
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
  },
  hobbies: ["listening music", "wattching a movie"],
};

const stringify = JSON.stringify(bio);
const parse = JSON.parse(stringify);
const array = JSON.stringify([bio]);

console.info(stringify);
console.info(parse);
console.info(array);
