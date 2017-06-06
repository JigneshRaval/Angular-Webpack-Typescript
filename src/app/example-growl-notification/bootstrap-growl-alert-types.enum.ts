export enum BootstrapAlertTypes {
    SUCCESS = 0,
    INFO = 1,
    WARNING = 2,
    DANGER = 3,
}
/*
export const BootstrapAlertTypes = {
    [Symbol('SUCCESS')] : 0,
    [Symbol('INFO')] : 1,
    WARNING : 2,
    DANGER : 3,
}*/

// ES6 Symbol() Example
//============================

// Example 1
let sym = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"

// Example 2
var foo = {
  [Symbol()]: 'foo',
  [Symbol('foo')]: 'bar',
  [Symbol.for('bar')]: 'baz',
  what: Symbol('what')
}

console.log(Object.getOwnPropertySymbols(foo))

for (let symbol of Object.getOwnPropertySymbols(foo)) {
  console.log(foo[symbol])
  // <- 'foo'
  // <- 'bar'
  // <- 'baz'
}

// Example 3
const Color = {
    RED: Symbol('RED'),
    GREEN: Symbol('GREEN'),
    BLUE: Symbol('BLUE'),
}
console.log(String(Color.RED));
console.log('Color: ', Color.RED)