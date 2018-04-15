class Person {
  constructor(name = 'Person default') {
    //constructor()
    //you can pass arguments in the constructor function
    //console.log('func constructor is here')
    //this.name = name
    //use logical or operator for default as workaround
    //this.name = name || "default value";
    //in ES6 you can use function defaults
    //constructor(name = 'set default value') {
    this.name = name
  }
  //next method
  getGreeting() {
      //return 'Hi'
      //return 'Hi ' + this.name + '!'
      //use template strings (interpolation)
      return `Hi ${this.name} (interpolation)!`
  }
}

const me = new Person("Evi Bulli");
console.log(me);
console.log(me.getGreeting())

const other = new Person();
console.log(other);
console.log(other.getGreeting())
