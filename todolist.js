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

/*Version 7
//Interlude Data Types and comparisons



*/