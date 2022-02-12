// String
const a = 10;
const b = 20;
let sum = a + b;

console.log ('---String---');

console.log ('Before',sum);
console.log ('After', String(sum));

const firstName = 'Bryan';
const lastName = 'Velasco';
const fullName = "Hello, my name is " + firstName + "" + lastName;

console.log ('Before', fullName);
console.log ('After', `Hello, my name is ${firstName} ${lastName}`);

// Number Data Type

let age = 24; 
const favNum = 3;

console.log ('---Number---');

console.log ('Before', age);
console.log ('After', --age);
console.log ('After pt.2', ++age);



// Boolean Data Type

Boolean("Do you like dogs?");
const bool1 = true;
const bool2 = false;

console.log ('---Boolean---');

console.log ('Before', bool2);
console.log ('After', !(bool2));

const x = 9 > 10
console.log ('Before', x);
console.log ('After', !(x));


// Array Data Type
const pets = ['cats','dogs','birds','snakes'];

console.log ('---Array---');

console.log ('Before', pets);
console.log ('After', (pets.length));

const arr = [1, 2];

console.log ('Before',arr)

arr.length = 5

console.log ('After',arr)

