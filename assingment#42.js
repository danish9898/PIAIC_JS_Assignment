// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

var magicians_names = ["Lance Burton", "Ricky Jay", "Mark Wilson", "john"];
function show_magicians(magicians_names) {
  magicians_names.forEach((element) => {
    console.log(element);
  });
}

function make_great(magicians_names) {
  for (var i = 0; i < magicians_names.length; i++) {
    magicians_names[i] = `The Great ${magicians_names[i]}`;
  }
}

make_great(magicians_names);
show_magicians(magicians_names);
