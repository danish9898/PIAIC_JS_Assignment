//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
function personName(person = "eric") {
  let name = person;
  return name;
}

var eric = "eriC ben";
console.log("Lower case " + personName(eric).toLocaleLowerCase());
console.log("Upper case " + personName(eric).toUpperCase());
console.log(
  "Title case " +
    personName(eric)
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ")
);
