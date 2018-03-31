/*
/ this keyword - no longer bound in arrow functions
*/

//create object user

const user = {
  name: "Evi",
  cities: ["Hamburg", "Schwiederstorf", "Harburg"],
  printCities: function() {
    console.log('### ' + this.name + ' ###');
    console.log(this.cities);

    //now loop over cities
    //error: this.name in anonymous function not available!
    //workaround 1: const that = this
    const that = this;
    this.cities.forEach(function(city) {
      console.log(that.name + " wohnte in " + city);
    });
  }
};

user.printCities();

//ARROW functions no longer bind THEIR OWN this value - instead it uses the this value of the context it has been created in (its parent's THIS VALUE).

const userArrow = {
  name: "Bulli",
  cities: ["Delmenhorst", "Hamburg"],
  //ES6 Method definition
  //printCities: function () {    >    printCities() {
  printCities() {
    console.log('### ' + this.name + ' ###');
    console.log(this.cities);
    //now loop over cities
    // this.cities.forEach(city => {
    //   console.log(this.name + " wohnte in " + city);
    // });
    //SHORTHAND
    this.cities.forEach(city => console.log(this.name + " wohnte in " + city));
  }
};

userArrow.printCities();

const userArrowMap = {
    name: 'Oli',
    cities: ['Blankenese', 'Iserbrook', 'Sülldorf'],
    printCities() {
      console.log('### ' + this.name + ' ###');
      console.log(this.cities);
      return this.cities.map((city) => this.name + ' wohnte schon in ' + city)
    }
  };
  //map returns a new array
  console.log(userArrowMap.printCities());

/* 
    arguments object - no longer bound with arrow functions 
*/

// regular (ES5) function

const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(33, 44, "arg1"));

// arrow function

console.log("ARROW FUNC");

const addArrow = (c, d) => {
  //console.log(arguments)
  //returns arguments is not defined
  return c + d;
};

console.log(addArrow(1000, 1411, "argArrow"));

/* CHALLENGE AREA */

const multiplier = {
    //val1: 2,
    numbers: [10,20,30],
    multiply(x) {
        //return this.numbers.map( (number) => this.val1 * number )
        return this.numbers.map( (number) => number * this.x)
    }
}
console.log('### Multiplier ###')
console.log(multiplier.multiply(2))
