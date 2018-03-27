/*Interlude Data Types and comparisons
//JavaScript data Types
/// {} // todolist, arrays, functions
//Primitives (building blocks)
//// string: 'look at this string!'
//// number: 1, 2, 3, 4 ...
//// boolean: true or false
//// undefined: a value that hasn't been set
//// Null: 'nothing'
//COMPARISONS WITH PRIMITIVES(values)
string comparisons: 'gordan' === 'gordan' > true
string comparisons: 'gordan1' === 'gordan' > false
number comparisons: 100 === 100 > true
number comparisons: 1 === 2 > false
boolean comparison: true === true > true
boolean comparison: false === false > true
boolean comparison: true === false > false
undefined comparison: undefined === undefined > true
null comparison: null === null > true

///COMPARISONS WITH OBJECTS(references, basically a memory address)
{} === {} > false (doesn't follow the primatives behavior above.)
//Javascript creates a different 'memory address' for each object.
//though they may look the same, they have different addresses and that is what is compared.

[1, 2, 3] === [1, 2, 3] > false

var houseA = {};
houseA === houseA > true
//HOW ARE PRIMATIVES AND OBJECTS STORED INSIDE VARIABLES?
//Code Example 1
var myPrimitive = 10;
var myObject = {name: 'gordon'}; > creates a new object with a 'memory address'

//Code Example 2
var myHouse = { color: 'blue'}; > creates an object with a color property = to blue. this has a memory address.
myHouse.color = 'red'; > JS will look at the variable myHouse, will see the 'memory address' and travel to that address. JS will then change that color property. 

//Code Example 3
var myHouse = {color: 'blue'}; 
var color = myHouse.color;// for color and myHouse to be be the same color 'red', var color = myHouse;
color = 'red'; // if this was instead color.color = 'red', then both color and myHouse.color would be red in the console.
// color in the console is 'red'
// myHouse.color in the console is still 'blue'


//Code Example 4
var myHouse1 = {color: 'blue'}; 
var myHouse2 = myHouse1;
myHouse2.color = 'red';
// myHouse1 in the console is 'red'
// myHouse2 in the console is 'red'

//Code Example 5
var myHouse1 = {color: 'blue'};
var myHouse2 = {color: 'blue'};
myHouse2.color = 'red';
//myHouse1 is = to blue
//myHouse2 is = to red

*/


//runWthDebugger
/*
runWithDebugger(fucntion() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
});
 */

//setTimeout
/*
setTimeout(function() {
    console.log('Wake up Rich!');
  }, 5000);
*/

//for each function
/*
var students =['jonathan', 'jenny', 'elliot'];
forEach(students, function(student) {
    console.log(student)
});
*/

//addEventListener
/*
turtorialsElement.addEventListener('click', function(e) {
    console.log('The turtorials element was clicked!');
});
*/

//Buzzwords: Higher order functions and callback functions
/*
Higher order functions:
--Functions that accept other functions.
--Enhance the behavior of other functions.

Callback functions:
--The functions that are passed into higher order functions.

 */