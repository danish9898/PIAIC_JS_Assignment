// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
// Both way to declare objects in javascript
let person = new Object();
person.name = "danish"
person.age = "27"
person.city = "islamabad"
person.occupation = "software developer"
// const person = {
//     name: 'Jamsheed Saeed',
//     age: 26,
//     city: 'Islamabad',
//     occupation: 'Software Developer'
//   }
  
  const message = `Hi, my name ${person.name}. I am ${person.age} years old. I live in ${person.city}. I am a ${person.occupation}.`;
  console.log(message);