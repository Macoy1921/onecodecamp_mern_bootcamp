// Task 1 create a class Person with properties name and age. Use introduce method
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Mark", 25);
person1.introduce();//Output will be Hi, I'm Mark and I'm 25 years old.

//Task 2 create a class Rectangle with properties width and height.
class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
}

getArea() {
    return this.width * this.height;
}

getPerimeter() {
    return 2 * (this.width + this.height);
}

}

const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1);

console.log(rectangle1.getArea()); // Output: 50
console.log(rectangle1.getPerimeter()); // Output: 30

//Task 3 Create a base class Shape with a method calculateArea(). Create derived classes Circle and Rectangle that calculate their respective areas.
class Shape {
    calculateArea() {
        throw new Error("calculateArea method not implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Usage of the classes
const myCircle = new Circle(5);
const myRectangle = new Rectangle(4, 6);

console.log(`Circle Area: ${myCircle.calculateArea()}`);
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`);

//Task 4Implement a class BankAccount with properties accountNumber and balance. Add methods to deposit, withdraw, and get the account info.
class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.error('Deposit amount must be positive');
            return;
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.error('Withdrawal amount must be positive');
            return;
        }
        if (amount > this.balance) {
            console.error('Insufficient funds');
            return;
        }
        this.balance -= amount;
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
    }
}
myAccount.deposit(1000);
console.log(myAccount.getAccountInfo());

myAccount.withdraw(1500);
console.log(myAccount.getAccountInfo());


//Task 5 Create a class Animal with properties name and species. Implement a method makeSound that logs the sound the animal makes.
class Animal {
    constructor(name, species) {
    this.name = name;
    this.species = species;
}

makeSound() {
    console.log(`${this.name} the ${this.species} makes a sound.`);
}
}
const lion = new Animal('Spot', 'Dog');
lion.makeSound(); // Output: Spot the Dog makes a sound.

const dog = new Animal('Goldie', 'Duck');
dog.makeSound(); // Output: Goldie the Duck makes a sound.


//Task6 Extend the Animal class to create specific animal classes like Dog, Cat, and Bird. Implement their own makeSound methods.
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} the ${this.species} Aw! Aw!`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} the ${this.species} Meow! Meow!`);
    }
}

class Bird extends Animal {
    makeSound() {
        console.log(`${this.name} the ${this.species} Tweet! Tweet!`);
    }
}

const myDog = new Dog('Buddy', 'Dog');
myDog.makeSound(); // Output: Buddy the Dog Aw! Aw!

const myCat = new Cat('Whiskers', 'Cat');
myCat.makeSound(); // Output: Whiskers the Cat Meow! Meow!

const myBird = new Bird('Tweety', 'Bird');
myBird.makeSound(); // Output: Tweety the Bird Tweet! Tweet!

//Task 7 Implement a class Shape with properties color and name. Create classes Circle and Square that inherit from Shape and add their own properties.
class Shape {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

class Circle extends Shape {
    constructor(color, name, radius) {
        super(color, name);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square extends Shape {
    constructor(color, name, sideLength) {
        super(color, name);
        this.sideLength = sideLength;
    }

    calculateArea() {
        return Math.pow(this.sideLength, 2);
    }
}

const redCircle = new Circle('red', 'Circle', 5);
console.log(redCircle.color); // Output: red
console.log(redCircle.name);  // Output: Circle
console.log(redCircle.radius); // Output: 5
console.log(redCircle.calculateArea()); // Output: 78.53981633974483

const blueSquare = new Square('blue', 'Square', 4);
console.log(blueSquare.color); // Output: blue
console.log(blueSquare.name);  // Output: Square
console.log(blueSquare.sideLength); // Output: 4
console.log(blueSquare.calculateArea()); // Output: 16

//Task 8Create a class Person with properties name and age. Implement a method greet that logs a greeting message.

class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
}

greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}
//Task 9Implement a class Student that inherits from Person and adds a property studentID. Configure the “greet” method to include the student's ID.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Student ID: ${this.studentID}`);
    }
}

// Example usage:
const person1 = new Person("Mark Perillo", 25);
person1.displayInfo();

console.log("\n");

const student1 = new Student("Gab Conce", 20, "S12345");
student1.displayInfo();
