/*VERSION 6.0 .toggleAll
//Requirements
// .toggleAll: If everything is true, make everything false.
// .toggleAll: Otherwise, make everything true.
var todoList = {
    todos: [],
    displayTodos: function (){        
        if(this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
        console.log('My Todos:');
          for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('( )', this.todos[i].todoText);
            }            
         }
       }
    },
    // todoList.addTodo should add objects
    addTodo: function(todoText) {  //addTodo('Hi')
        this.todos.push({
            todoText: todoText,    // this would be todoText: 'Hi',
            completed:false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText; //using dot notation to grab just the todoText property from the object
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed; //if todo.completed is true, then this will flip it to false, and vice versa
        this.displayTodos();
    },
    //version 6 addition
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos.
        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
        // Case 1: If everything is true, make everything false.
        if (completedTodos === totalTodos){
            // make everything false
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
            // Case 2: Otherwise, make everything true.
        } else {
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }

        this.displayTodos();

        
    }
};

*/

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

/*Version 7.0 HTML and the DOM
//Version 7.0 Requirements
//There should be a  "Display todos" button and a "Toggle All" button in the app.
//Clicking "Display todos" should run todoList.displyTodos.
//Clicking "Toggle all" should run todoList.toggleAll.
//HTML Essentials

var todoList = {
    todos: [],
    displayTodos: function (){        
        if(this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
        console.log('My Todos:');
          for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('( )', this.todos[i].todoText);
            }            
         }
       }
    },
    // todoList.addTodo should add objects
    addTodo: function(todoText) {  //addTodo('Hi')
        this.todos.push({
            todoText: todoText,    // this would be todoText: 'Hi',
            completed:false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText; //using dot notation to grab just the todoText property from the object
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed; //if todo.completed is true, then this will flip it to false, and vice versa
        this.displayTodos();
    },
    //version 6 addition
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos.
        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
        // Case 1: If everything is true, make everything false.
        if (completedTodos === totalTodos){
            // make everything false
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
            // Case 2: Otherwise, make everything true.
        } else {
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();        
    }
};
//version 7 additions---don't use!! Use version 8 additions.
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
});
*/

/*Version 8.0 Getting Data from Inputs
//-version 7 additions replaced by the refactored code below.
var handlers ={
    displayTodos: function() {
        todoList.displayTodos();
    },
    //Version 8 Requirements
    //--It should have working controls for .addTodo
    addTodo: function() {
       var addTodoTextInput = document.getElementById('addTodoTextInput');
       todoList.addTodo(addTodoTextInput.value);
       addTodoTextInput.value=''; //input will clear after adding the item
    },
    //--It should have working controls for .changeTodo
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementsById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value='';
        changeTodoTextInput.value='';
    },
    //--It should have working controls for .deleteTodo
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoTextInput.value='';
    },
    //--It should have working controls for .toggleCompleted
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedTextInput.value='';
    },
    toggleAll: function() {
        todoList.toggleAll();
    }   
};
*/
/* Version 9 Escaping from the Console
//Version 9 requirements
//--There should be an li element for every todo
//--Each li element should contain .todoText
//--Each li element should show .completed

*/

