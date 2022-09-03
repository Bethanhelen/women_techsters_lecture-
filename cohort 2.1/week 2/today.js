// // logical operators: && is the ampersand operator for comparison, || represents OR 
// const personName = "steve"
// const age = 31

// // if (age > 0 && age <= 12) {
// //     console.log(personName + " " + "is a child")
// // } else if (age >= 13 && age <= 19) {
// //     console.log(personName + " " + "is a Teenager")
// // } else {
// //     console.log(personName + " " + "is an Adult")
// // }

// logical operators: || represents OR  for comparison, 
// if (age < 16 || age > 65) {
//     console.log(personName + " " + "cannot participate in the marathon")
// } else {
//     console.log(personName + " " + "can participate in the marathon")
// }


// // Ternary operator
// const id = 100
// console.log(id === 100 ? "correct!" : "incorrect!")

// // using swtich variable
// const color = "red"

// switch (color) {
//     case "red":
//         console.log("color is red");
//         break;
//     case "blue":
//         console.log("color is blue");
//         break;
//     default:
//         console.log("color is neither red nor blue");
//         break;
// }

// // Function declaration can be defined, they are reuseable and can be called before or after declaring it
// function greet() {
//     return "Hello";
// }
// console.log(greet());

// // function with parameters (1 parameter)
// function greet(firstName) {
//     return "Hello " + firstName
// }
// console.log(greet("Elizabeth"));

// // function with parameters (2 parameters)
// //  firstName are called parameter, Elizabeth are called arguments, greet is the function
// function greet(firstName, lastName) {
//     return "Hello " + firstName + " " + lastName
// }
// console.log(greet("Elizabeth", "Jolade"));

// function greet(firstName = "Elizabeth", lastName = "Jolade") {
//     return "Hello " + firstName + " " + lastName
// }
// console.log(greet("Sara", "Peters"));

// // Function Expression
// const square = function(x) {
//     return x * 2
// }
// console.log(square(3));

// //  Immediately invokable functions
//  (function() {
//      console.log("IIFE ran...");
// })()

// (function(name) {
//     console.log("Hello " + name);
// })("Prince")