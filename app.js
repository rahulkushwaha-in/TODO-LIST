//SELECTORS
const todoInput = document.querySelector('.todo-input');
const toButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filerOption= document.querySelector('.filter-todo');





// EVENT LISTENERS

toButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);
filerOption.addEventListener('click',filterTodo);







//FUNCTIONS

function addTodo(event){
  // preventing from submitting
    event.preventDefault();
  //
    //todo div
  const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    //todo li
    const newTodo = document.createElement('li');
            newTodo.innerHTML = todoInput.value;
            newTodo.classList.add('todo-item');
            
            todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    //adding completed button to todo div we have created so far in js
    todoDiv.appendChild(completedButton);
    
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    //adding trash button to todo div we have created so far in js
    todoDiv.appendChild(trashButton);

    //appending to the main todoList 
    todoList.appendChild(todoDiv);

    //clear input value
    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
       const deleteTodo = item.parentElement;
       //animation
       deleteTodo.classList.add("fall")
       deleteTodo.addEventListener('transitionend',function(){
        deleteTodo.remove();
       })
    //    deleteTodo.remove();
    }

    if(item.classList[0]==='complete-btn'){
        const checkTodo = item.parentElement;
        checkTodo.classList.toggle("completed")
    }
}

function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display ='flex'
            break;
        case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display="flex";
            }
            else{
                todo.style.display = 'none';
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains('completed')){
                todo.style.display = 'flex';
            }
            else{
                todo.style.display='none'
            }
            break;

    }
})

}