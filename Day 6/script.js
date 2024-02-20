//arrow function
let greet = function(name) {
    console.log("Hello " + name);
}

greet = (name) => {
   console.log(`Hello ${name}`);
}   

greet("Mark");



//Template Literals
let name = "Mark"   
let age = 20;
console.log("Hello, my name " + name + ". I am " + age+ " years old.");

console.log(`Hello, my name ${name}. I am ${age} years old.`)

//Destructuring
let num = [1, 2, 3, 4, 5]
let [first, second, third, fourth, fifth] = num;
console.log(`${first} ${second} ${third} ${fourth} ${fifth}`)

const numbers = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
};

const {firstNum, secondNum, thirdNum, fourthNum, fifthNum} = numbers;
console.log(firstNum, secondNum, thirdNum, fourthNum, fifthNum);

//Spread  Operator
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

//Rest Operator

function myFunction(firstArg, ...restOfArgs) {
    console.log(firstArg);
    console.log(restOfArgs);
}
myFunction("one", "two", "three", "four");

const grades = {
    Math: 90,
    English: 80,
    Science: 70,
    PE: 60
}

const gradesWithEC = {
    ...grades,
    extraCurrcular: 50
}
console.log(gradesWithEC);

//default parameters
function multiply(a, b=5) {
    return a * b
}
console.log(multiply(2)); // Output: 10 (2 * 5)
