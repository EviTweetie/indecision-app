class Person {
  constructor(name = 'Person default', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
      return `Hi ${this.name} (interpolation)!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
    constructor(name, age, major='undecided') {
        super(name)
        this.major = major
    }
    hasMajor() {
        return !!this.hasMajor
        //!!'' flips value to true 
        //!!undefined flips value to false
    }
    //overwriting method of parent (super) class
    getDescription() {
        let description = super.getDescription()

        if(this.hasMajor) {
            //description = description + ' (add some value)'
            //shorthand: description +=
            //description += ' (add some value)'
description += ` Their major is ${this.major}.`
        }
        return description
    }
}

const meP = new Person("Evi Bulli", 47, 'Informatik');
console.log(meP);

const otherP = new Person();
console.log(otherP);

const meS = new Student("Evi Bulli", 47, 'Informatik');
console.log(meS);
console.log(meS.hasMajor())
console.log(meS.getDescription())

const otherS = new Student();
console.log(otherS);
console.log(otherS.hasMajor())