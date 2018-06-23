//shortest way: 
const isAdultShort = (age) => age >= 18 //returns true or false 

const isAdult = (age) => {
  if (age >= 18) {
    return `Person (Age: ${age}) is adult (${true})`;
  } else {
    return `Person  (Age: ${age}) is not adult (${false})`;
  }
};

const canDrink = (age) => age >= 21 ? 'can drink' : 'no drinks'

const isSenior = (age) => age >= 65 


export { isAdult, canDrink, isSenior as default }