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


///////// UNDERSTANDING this ///////////

//Understanding 'this'
//check the github page https://github.com/gordonmzhu/cheatsheet-js

///////// CASE 1 DEMONSTRATION //////////

/*Case 1: In a regular function (or if you're not in a function at all), 
this points to window. This is the default case.
function logThis() {
  console.log(this);
}
logThis(); // window

// In strict mode, `this` will be `undefined` instead of `window`. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

///////// CASE 2 DEMONSTRATION /////////

/*Case 2: When a function is called as a method, 
this points to the object that's on the left side of the dot.
/*
// You can also think of this as the "left of the dot" rule. 
// For example, in myObject.myMethod(), `this` will be myObject
// because myObject is to the left of the dot.
 
// Of course, if you're using this syntax myObject['myMethod'](),
// technically it would be the "left of the dot or bracket" rule,
// but that sounds clumsy and generally terrible.
 
// If you have multiple dots, the relevant dot is the one closest 
// to the method call. For example, if you have one.two.hi();
// `this` inside of hi will be two.
 
var myObject = {
    myMethod: function() {
      console.log(this);
    }
  };
  
  myObject.myMethod(); // myObject
*/


///////// CASE 3 DEMONSTRATION /////////

/*Case 3: In a function that's being called as a constructor,
 this points to the object that the constructor is creating. 
 function Person(name) {
  this.name = name;
}

var gordon = new Person('gordon');
console.log(gordon); // {name: 'gordon'}
 */

///////// CASE 4 DEMONSTRATION ////////////

 /*Case 4: When you explicitly set the value of this manually using bind,
  apply, or call, it's all up to you.
  function logThis() {
  console.log(this);
}
var explicitlySetLogThis = logThis.bind({name: 'Gordon'});

explicitlySetLogThis(); // {name: 'Gordon'}

// Note that a function returned from .bind (like `boundOnce` below),
// cannot be bound to a different `this` value ever again.
// In other words, functions can only be bound once.
var boundOnce = logThis.bind({name: 'The first time is forever'});

// These attempts to change `this` are futile.
boundOnce.bind({name: 'why even try?'})();
boundOnce.apply({name: 'why even try?'});
boundOnce.call({name: 'why even try?'});  
  */

///////// CASE 5 DEMONSTRATION //////////

/*Case 5: In a callback function, apply the above rules methodically.
  function outerFunction(callback) {
  callback();
}

function logThis() {
  console.log(this);
}


 //// Case 1: The regular old default case.
 
 
outerFunction(logThis); // window


//// Case 2: Call the callback as a method
(You'll probably NEVER see this, but I guess it's possible.)
 
 
function callAsMethod(callback) {
  var weirdObject = {
    name: "Don't do this in real life"
  };
  
  weirdObject.callback = callback;
  weirdObject.callback();
}

callAsMethod(logThis); // `weirdObject` will get logged to the console


 //// Case 3: Calling the callback as a constructor. 
 (You'll also probably never see this. But in case you do...)
 
 
function callAsConstructor(callback) {
  new callback();
}

callAsConstructor(logThis); // the new object created by logThis will be logged to the console


//// Case 4: Explicitly setting `this`.

 
function callAndBindToGordon(callback) {
  var boundCallback = callback.bind({name: 'Gordon'});
  boundCallback();
}

callAndBindToGordon(logThis); // {name: 'Gordon'}

// In a twist, we give `callAndBindToGordon` a function that's already been bound.
var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToGordon(boundOnce); // {name: 'The first time is forever'}
  
  */