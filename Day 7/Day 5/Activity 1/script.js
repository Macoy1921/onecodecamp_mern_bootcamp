
//Odd or Even
//check if the number is even
function isEven (number) {
    return number % 2 === 0;
  }
  
  //check if the number is odd
  function isOdd (number) {
    return number % 2 !== 0;
  }
  
  //Convert Celsius to Farenheit
  function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  // Change the inputs below to test code
  convertCtoF(30);
  
  //Check if a Number is a Multiple of 3 or 5
  function multipleOf3or5(number) {
      if (number % 3 === 0 || number % 5 === 0) {
          console.log("True");
      } else {
          console.log("False");
      }
  }
  
  //Find The Largest Number
  function findLargestNumber(numbers) {
      let largestNumber = numbers[0];
      
      for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] > largestNumber) {
              largestNumber = numbers[i];
          }
      }
      
      return largestNumber;
  }
  
  
  let add = a + b;
  function add(a, b) {
      a + b;
  }
  
  add(1, 1);
  
  //function expression
  let add = function (a, b) {
       a + b;
  }
  
  add(1, 1);
  
  function calculate(num1, num2, operation) {
      return operation(num1, num2);
  }
  function add(a, b) {
      return a + b;
  }
  
  function subtract(a, b) {
      return a - b;
  }
  
  let result1 = calculate(5, 3, add);
  let result2 = calculate(5, 3, substract);
  
  console.log("Result in addition: " + result1);
  console.log("Result in subtraction: " + result2);
  
  
  function greet(name, callback) {
      console.log("Hello " + name);
      callback();
  }
  //callback function
  function sayGoodbye() {
      console.log("Goodbye");
  }
  greet("Mark", sayGoodbye);
  
  