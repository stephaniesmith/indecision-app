console.log('Utils!');

const square = x => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const isAdult = age => age >= 18;
const canDrink = age => age >= 21;

export {
  square,
  add,
  subtract as default,
  isAdult,
  canDrink
};