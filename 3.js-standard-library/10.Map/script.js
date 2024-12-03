const map = new Map();

console.info(map.set("Nama", "Nurul"));
console.info(map.set("Negara", "Indonesia"));

console.info(map);

console.info(map.get("Nama"));
console.info(map.get("Negara"));
console.info(map.get("Umur"));

for (const element of map) {
  console.info(`${element[0]}, ${element[1]}`);
}

map.forEach((value, key) => {
  console.info(`${key}, ${value}`);
});
