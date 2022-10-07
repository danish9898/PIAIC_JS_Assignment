// Think of something you could store in a array. For example,
// you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.

var list = "mountains rivers countries cities languages";
var updatedlist = list.split(" ");
updatedlist.forEach((element) => {
  console.log(element);
});
