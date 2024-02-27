//Task 1 Arrow function to calculate the square of a given number
const calculateSquare = (number) => {
  const square = number ** 2; 
  return square; //this return function returns the calculated square value.
};

const result = calculateSquare(5);
console.log(result); 
// Output: 25



//Task 2 Use Template Literals
let person = {
    name: "Mark",
    age: 25
  };
  
  const welcomeMessage = `Hello, ${person.name}! You are ${person.age} years old.`;
  
  console.log(welcomeMessage);

  //Task 3 Use destructuring
  const person1 = {
    firstName: "Charlie",
    lastName: "Bitme"
  };
  
  const { firstName, lastName } = person1;
  console.log(`First Name: ${firstName}\nLast Name: ${lastName}`);
  
  //Task 4 Use the spread operator
  let fruits = ["apple", "banana"];
let vegetables = ["carrot", "broccoli"];

// Using the spread operator to merge arrays
let combinedArray = [...fruits, ...vegetables];

console.log(combinedArray);
//Output: ["apple", "banana", "carrot", "broccoli"]

//Task 5 Use default parameters
const calculateRectangleArea = (length = 1, width = 1) => length * width;

console.log(calculateRectangleArea());    
console.log(calculateRectangleArea(4));   
console.log(calculateRectangleArea(3, 5)); 

//Task 6
class Person1 {
    name;
    age;
  
    introduce() {
      console.log(`Greetings! I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
 
  const david = new Person1();
  david.name = "David";
  david.age = 35;
  
  
  david.introduce();// call the introduce method
  
