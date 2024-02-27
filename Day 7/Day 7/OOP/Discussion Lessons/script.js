//Classes
 class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}
    
//creating instances of the car class
//Instantation
const myCar = new Car("Toyota", 2022);
console.log(myCar);

const anotherCar = new Car("Ford", 2021);
console.log(anotherCar);

//constructor "function" for creating a person object

function Person (name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

//creating instances of Person objects
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

person1.greet();
person2.greet();

//Encapsulation


class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
     }

     withdraw(amount) {
         if (amount > this.balance) {
            this.balance -= amount;
         } else {
             console.log("Insufficient funds");
         }
     }

     getAccountInfo() {
         return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`
     }
}

const myAccount = new BankAccount(12345, 1000);
myAccount.deposit(500);

console.log(myAccount.getAccountInfo());

myAccount.withdraw(1500);
console.log(myAccount.getAccountInfo());
console.log(myAccount.withdraw(1000));

//Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`Aw Aw!`);
   }
}

const myDog = new Dog("Spot");
myDog.eat();
myDog.bark();

//Polymorphism

class Animal {
    makeSound() {
        return "The animal make a noise";
    };
}
class Dog extends Animal {
    makeSound() {
        return super.makeSound() + " the dog barks";
    };
}

const myDog = new Dog();
console.log(myDog.makeSound());

//Abstraction
class Vehicle {
constructor(make, model) {
    this.make = make;
    this.model = model;
}

start() {
    return `${this.make} ${this.model} is starting the engine`;
}

stop() {
    return `${this.make} ${this.model} is stopping the engine`;
}

}

const myVehicle = new Vehicle("Toyota", "Camry");
console.log(myVehicle.start());
console.log(myVehicle.stop());