//There should be a  "Display todos" button and a "Toggle All" button in the app.
//Clicking "Display todos" should run todoList.displyTodos.
//Clicking "Toggle all" should run todoList.toggleAll.
var todoList = {
    todos: [],    
    // todoList.addTodo should add objects
    addTodo: function(todoText) {  //addTodo('Hi')
        this.todos.push({
            todoText: todoText,// this would be todoText: 'Hi',
            completed:false
        });        
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText; //using dot notation to grab just the todoText property from the object
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);        
    },
    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed; //if todo.completed is true, then this will flip it to false, and vice versa
    },
    //version 6 addition
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // Get number of completed todos.
        this.todos.forEach(function(todo) {
            if (todos.completed === true) {
                completedTodos++;
            }
        });
        this.todo.forEach(function(todo) {
            // Case 1: If everything is true, make everything false.
            if (completedTodos === totalTodos) {
                todo.completed = false;
            // Case 2: Otherwise, make everything true.
            } else {
                todo.completed = true;
            }
        });           
    }
};
//Version 8.0 Getting Data from Inputs
var handlers ={
    //--It should have working controls for .addTodo
    addTodo: function() {
       var addTodoTextInput = document.getElementById('addTodoTextInput');
       todoList.addTodo(addTodoTextInput.value);
       addTodoTextInput.value=''; //input will clear after adding the item
       view.displayTodos();
    },
    //--It should have working controls for .changeTodo
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementsById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value='';
        changeTodoTextInput.value='';
        view.displayTodos();
    },
    //--It should have working controls for .deleteTodo
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    //--It should have working controls for .toggleCompleted
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedTextInput.value='';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }   
};
 var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML =''; 
        todoList.todos.forEach(function(todo, position) {
            var todosLi = document.createElement('li');            
            var todoTextWithCompletion = '';
            if (todo.completed === true) {
                todoTextWithCompletion = '(x) '+ todo.todoText;
            } else {
                todoTextWithCompletion = '( ) '+ todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoUl.appendChild(this.createDeleteButton());            
            todosUl.appendChild(todoLi);
        }, this); //this will reference the displayTodos under var view
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function(e) {
        //get the element that was clicked on.
        var elementClicked = event.target;
        //Check if elementClicked is a delete button.
        if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
      });
    }    
 };
view.setUpEventListeners();
