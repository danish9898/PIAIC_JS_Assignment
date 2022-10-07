// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
var sandwitch = [
  {
    name: "test",
    type: "Grilled Chicken Sandwich",
  },
  {
    name: "mine",
    type: "Ham Sandwich",
  },
];
var sandwitchOne = [
  {
    name: "test",
    type: "Chicken Sandwich",
  },
  {
    name: "mine",
    type: "Seafood Sandwich",
  },
];
var sandwitchTwo = [
  {
    name: "test",
    type: "Ham Sandwich",
  },
  {
    name: "mine",
    type: "Grilled Cheese",
  },
];

function sandwhiceOrdered(items) {
  items.forEach((element) => {
    console.log(
      `The Sandwhich name is ${element.name} and type is ${element.type}`
    );
  });
}

sandwhiceOrdered(sandwitch);
sandwhiceOrdered(sandwitchOne);
sandwhiceOrdered(sandwitchTwo);
