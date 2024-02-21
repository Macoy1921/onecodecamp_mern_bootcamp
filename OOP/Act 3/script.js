//Task 1 Character
class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.stamina = 100;
      this.manna = 100;
    }
  
    walk(action) {
      this.stamina -= 1;
      console.log(`${this.name} is walking.`);
    }
  
    run(action) {
      this.stamina -= 3;
      console.log(`${this.name} is running.`);
    }
  
    showStats() {
      console.log(`Name: ${this.name}`);
      console.log(`Health: ${this.health}`);
      console.log(`Stamina: ${this.stamina}`);
      console.log(`Manna: ${this.manna}`);
    }
  }
  
  const character1 = new Character("character");
  character1.walk(3);
  character1.run(2);
  character1.showStats();

  //Task 2 Shaman
  //Inheritance

    class Shaman extends Character {
        constructor(name) {
          super(name);
          this.health = 150;
        }

        walk(action) {
          super.walk(action); // Call the walk method from the base class
          super.walk(action); // Log the walk action twice
        }
      heal(action) {
        this.health += 5;
        this.stamina += 5;
        this.manna += 5;
        console.log(`${this.name} is healing.`);
      }
      }
      
      
      const shaman = new Shaman("Merlin");
      
    shaman.walk(2);
    shaman.run();
    shaman.heal();
    shaman.showStats();

//Task 3 Swordsman Inheritance
//Now, create another class called Swordsman that inherits everything that the Character has and does,
//with these two changes: 1) have the default health be 170 and 2) add a new method called slash(), which when invoked, decreases the manna by 10.
//Have the Swordsman walk three times, run twice, slash twice, and have it display its stats.
//Have the Swordsman walk three times, run twice, slash twice, and have it display its stats.
//Now for the first instance of Character (instance called 'character '), try calling a method 'heal' or 'slash' and make sure it doesn't work. :)

class Swordsman extends Character {
    constructor(name) {
      super(name);
      this.health = 170;
    }
  
    slash() {
      if ((this.mana - 10) >= 0) {
          this.mana -= 10;
          return;
      }
      console.log("Not enough mana!");
  }

  showStats() {
      console.log("I am powerful!");
      super.showStats();
  }
}

  
  const swordsman = new Swordsman("Vanguard");
  
  const performSlash = () => {
    swordsman.walk();
    swordsman.walk();
    swordsman.walk();
    swordsman.run();
    swordsman.run();
    swordsman.slash();
    swordsman.slash();
    swordsman.showStats();
  };
  
  performActions();
  
  const character = new Character("Character");

  if (character.heal) {
    character.heal(); 
  }
  if (typeof character.slash === "function") {
    character.slash(); 
  }
  