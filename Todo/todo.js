console.log('this is todo from angular');

angular.module('todoApp', [])
 .controller('TodoListController', function(){
  let todoList = this;
  todoList.todos = [
   {text:'learn angularJS', done:true},
   {text:'build an angular app', done:false} 
  ];
  todoList.addTodo = ()=>{
   todoList.todos.push({text: todoList.todoText, done:false});
   todoList.todoText = '';
  };
  todoList.remaining = ()=>{
   let count =0;
   angular.forEach(todoList.todos, function(todo)  {
    count+= todo.done ? 0:1;
   });
   return count;
  };
  todoList.archive = ()=>{
   let oldTdodos = todoList.todos;
   todoList.todos =[];
   angular.forEach(oldTdodos, function(todo){
    if(!todo.done) todoList.todos.push(todo);
   });
  };

 });