//import './utils'

import { square, add } from './utils'
//{} not an object here, but import syntax!!!
import { isAdult, canDrink } from './person'

console.log('app.js is running')

console.log(square(5))
console.log(add(10003, 4))
console.log(isAdult(5))
console.log(canDrink(34))

const personAge = 15

console.log(isAdult(personAge));
console.log(canDrink(personAge));