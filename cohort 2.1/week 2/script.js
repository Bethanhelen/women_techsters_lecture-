// alert("hello world")

// this is a single line comment
/* this is a 
multiple line
comment */

// how to change color using js on the console of browser
// document.querySelector("h1").style.color = "blue"

// console.log("hello world");
// console.log(12345);
// console.log(true);
// var greeting = "hello"
// console.log(greeting);
// console.log([1, 2, 3, 4, 5]);
// console.log({ a: 1, b: 2 });
// console.clear()

// var, let, const - creating variables
// var personName = "Onimisi Alade"
// console.log(personName);

// // reasigning variables
// personName = "Vivian Ekpe"
// console.log(personName);

// // initializing without assigning value
// var greeting
// greeting = "how are you!"
// console.log(greeting);

// let personName = "Onimisi Alade"

// // reasigning variables
// personName = "Vivian Ekpe"
// console.log(personName);

// // initializing without assigning value
// let greeting
// greeting = "how are you!"
// console.log(greeting);

// rule for naming variables
// contains letters, number, _, $
// cannot start variable with a number
// var myName = "Prince"

// // multiword variable naming conventions it can be used by var or let
// var firstName = "Olabisi" //camel case
// var first_name = "sarah" // underscore convention
// var FirstName = "Tom" //Pascal case
// var firstname = "Toin"

// // using const it does not allow the reassigning of values or variables
// // it does not allow declaration of a varaible without a value assigned to it
// const personName = "Abigail"
// console.log(personName);
// const greeting


// // object data type
// const person = {
//     pname: "Martha",
//     age: 31
// }
// person.age = 30
// console.log(person.age);

// // array is a non-primitive data type and to add a value at the end of a list of numbers you use PUSH
// const numbers = [1, 2, 3, 4, 5, 0]
// console.log("numbers initialstate", numbers);
// numbers.push(6)
// console.log("numbers altered", numbers);

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

// // Loops! are condition that will continue as long as the condition is met.
// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }
// // for loops and conditional statement
// for (let i = 0; i <= 10; i++) {
//     if (i === 2) {
//         console.log("2 is my favourite number");
//         continue
//     }
//     console.log("number " + i)
// }

// for (let i = 0; i <= 10; i++) {

//     if (i === 5) {
//         console.log("stop here");
//         break
//     }
//     console.log("number " + i)
// }

// // while loops
// let i = 0

// while (i < 10) {
//     console.log("number " + i);
//     i++;
// }

// // do-while loops will execute whether the condition is met
// let i = 0

// do {
//     console.log("Number " + i);
//     i++;
// }
// while (i < 10)
// // when a do-while loop condition is not met, example
// let g = 100

// do {
//     console.log("Number " + g);
//     g++;
// }
// while (g < 10)

// example of how to use loop
// const cars = ["ford", "honda", "toyota"]
// console.log(cars.length);
// console.log(cars[1]);
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// forEach used only for array to log all the element using an itirator, which is the singular version of the parameter(car the singular of the array cars)
// const cars = ["ford", "honda", "toyota"]
// cars.forEach(function(car) {
//     console.log(car);
// })

// const cars = ["ford", "honda", "toyota"]
// cars.forEach(function(car, index) {
//     // console.log(index + " : " + car);

//     // template literal new Es6 property to replace the above console.log
//     console.log(`${index} : ${car}`)
// })

// const cars = ["ford", "honda", "toyota"]
// cars.forEach(function(vehicle, index, arrayItslef) {
//     console.log(`${index} : ${vehicle}`);
//     console.log(arrayItslef);
// })

// //  Global Scope relating to the use of var, let and const
//  var a = 1
//  let b = 2
//  const c = 3

//  function test() {
//      var a = 4
//     let b = 5
//      const c = 6
//      console.log("Function Scope", a, b, c);
//  }
//  test()

// // console.log("Global Scope", a, b, c)

// // why var is not used since it contradicts between function scope, block scope and global scope
// var a = 1
// let b = 2
// const c = 3

// if (true) {
//     var a = 7
//     let b = 8
//     const c = 9
//     console.log("Block Scope", a, b, c);
// }

// console.log("Global Scope", a, b, c);