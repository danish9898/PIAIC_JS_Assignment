// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

var magicians_names = ["Lance Burton", "Ricky Jay", "Mark Wilson", "john"];
function show_magicians(magicians_names) {
  magicians_names.forEach((element) => {
    console.log(element);
  });
}
show_magicians(magicians_names);
