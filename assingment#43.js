// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magicians_names = ["Lance Burton", "Ricky Jay", "Mark Wilson", "john"];
var magicians_great = [];
function show_magicians(magicians_names) {
  magicians_names.forEach((element) => {
    console.log(element);
  });
  magicians_great.forEach((element) => {
    console.log(element);
  });
}

function make_great(magicians_names) {
  for (var i = 0; i < magicians_names.length; i++) {
    magicians_great.push(`The Great ${magicians_names[i]}`);
  }
}

make_great(magicians_names);
show_magicians(magicians_names);
