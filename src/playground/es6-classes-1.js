class Person {
  constructor(name = 'Person default', age = 0) {
    //constructor()
    //you can pass arguments in the constructor function
    //console.log('func constructor is here')
    //this.name = name
    //use logical or operator for default as workaround
    //this.name = name || "default value";
    //in ES6 you can use function defaults
    //constructor(name = 'set default value') {
    this.name = name
    this.age = age
  }
  //next method
  getGreeting() {
      //return 'Hi'
      //return 'Hi ' + this.name + '!'
      //use template strings (interpolation)
      return `Hi ${this.name} (interpolation)!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person("Evi Bulli", 47);
console.log(me);
console.log(me.getGreeting())
console.log(me.getDescription())

const other = new Person();
console.log(other);
console.log(other.getGreeting())
console.log(other.getDescription())

//4.24 challenge: 
//add age as argument with default 0
//add method getDescription - Andrew Mead is 26 year(s) old.