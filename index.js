/* depending on the type we wish to convert a Boolean to, we can use either 'toString()' OR number() 

Boolean Conversion.

it depends on what do you want to convert a boolean too.

we can use toString() method again to convert boolean to a string.

if your going to convert a boolean value to a number, then use Number() function.

*/

let string = true.toString(); // true

let number1 = Number(true); // 1

let number2 = Number(false); // 0

console.log(string, number1, number2);

console.log(typeof(string)); // typeOf is a string


/*Unary and Binary operators convert boolean to a number. Therefore we can perform arithmetic operators with boolean values. These operators convert TRUE to a NUMBER 1, while FALSE to a NUMBER 0  */

console.log(+true); // 1
console.log(+false); // 0
console.log(true/1); // 1/1
console.log(false *1); // 0*1
console.log(false-false); // 0-0
console.log(false+true); // 0+1
console.log(true/true); // 1/1