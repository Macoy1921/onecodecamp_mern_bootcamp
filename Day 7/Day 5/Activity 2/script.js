//Function Basics Exercises
function greet(name) {
    console.log("Hello " + name);
}
//Calling the function with name
greet("Sachin");

//Function expression
let add = function (a, b) {
    return a + b
}

let result = add(5, 7);

console.log(result)

//Is Even
function isEven(number) {
    return number % 2 === 0
}
//testing the function with numbers
console.log(isEven(10));
console.log(isEven(4));

//Local vs Global Scope
let GlobalVariable = "Global";

function myFunction() {
    let localVariable = "Local";
    console.log("Inside the function: " + localVariable);
}
console.log("Outside the function: " + GlobalVariable);
myFunction();

//Function Hoisting
//example 1 function declaration
hoistedFunction();
function hoistedFunction() {
    console.log("This function has been  hoisted!");
}

//example 2 function expression
hoistedFunction();
let hoistedFunction = function () {
    console.log("This function exxpression is not hoisted!"); 
}
 
//Higher Order Function
function mathOperation(num1, num2, operationCallback) {
    return operationCallback(num1, num2)

}

//Math Operations Callback functions
function add(num1, num2) {
    return num1 + num2
}

let resultOfAdditon = mathOperation(5, 3, add);
console.log("Result of Additon:", resultOfAdditon);

function subtract(num1, num2) {
    return num1 - num2
}
let resultOfSubtraction = mathOperation(5, 3, subtract);
console.log("Result of Subtraction:", resultOfSubtraction);

function multiply(num1, num2) {
    return num1 * num2
}

let resultOfMultiplication = mathOperation(5, 3, multiply);
console.log("Result of Multiplication:", resultOfMultiplication);

function divide(num1, num2) {
    return num1 / num2
}

let resultOfDivision = mathOperation(5, 3, divide);
console.log("Result of Division:", resultOfDivision);


//Closure
//a function counter that returns another function
function counter() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	};
};

let function1 = counter(); // the first function
function1();  // shows 1

let function2 = counter(); // the second function
function2();  // shows 1

//Function as parameter
function applyFunction(func, array) {
    // Using the map function to apply the given function to each element of the array
    return array.map(func);
}

// Example usage:


function greet(name) {
    return "Hello, " + name;
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];


const greetings = applyFunction(greet, names);

console.log("Original Array:", names);
console.log("Greetings Result:", greetings);

//EX 9
function getUserData(callback) {
    // Simulating data retrieval
    const userData = {
      id: 1,
      username: "Macoy09",
      email: "ravenmichelov@gmail.com",
    };
  
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
      // Call the callback function with the user object
      callback(userData);
    }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
  }
  
  // Example usage:
  function handleUserData(user) {
    console.log("User data retrieved:", user);
    // You can perform further actions with the user object here
  }
  
  // Call the getUserData function with the callback function
  getUserData(handleUserData);



  //DOM Manipulation