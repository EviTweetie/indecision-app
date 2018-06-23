//shortest way: 
const isAdultShort = (age) => age >= 18 //returns true or false 

const isAdult = (a) => {
    if(a >= 18) {
        return `Person (Age: ${a}) is adult: ${true}`
    } else {
        return `Person  (Age: ${a}) is adult: ${false}`;
    }
}

export const canDrink = d => (
    d >= 21 ? `Person (Age: ${d}) can drink: ${true}` : `Person (Age: ${d}) can drink: ${false}`); 


export { isAdult }