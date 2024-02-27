//Task 1 Practice using common JS built-in methods to perform various operations.

let randomNumber = Math.floor(Math.random() * 10) + 1; // Create a number between 1 and 10

alert("Guess the number between 1 and 10:"); // Make the user to guess the number using alert


let guess = parseInt(prompt("Enter your guess:")); // Use parseInt to convert the user's input to a number

if (!isNaN(guess) && guess === randomNumber) {
  alert("Wow! Your guess is correct.");
} else {
  alert(`Oops!, the correct number was ${randomNumber}.`);
}


