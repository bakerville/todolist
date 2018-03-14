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
//code example 1

*/

/*Version 7.0 HTML and the DOM



*/