angular.module("todoapp").controller('TodoController', function($scope,TodoService){
	//$scope.todos = [];
	//var todoId=1;
	

	$scope.init = function(){
		$scope.getAll();
	}

	TodoService.getAllTodos();

	$scope.getAllTodos = function(){
		TodoService.getAllTodos()
		.then(function(res){
			//success
		},function(err){
			//error
		});
	};

	$scope.addTodo = function(){
		TodoService.addTodo();
		TodoService.getAllTodos();
	};
	
	$scope.deleteTodo = function(todoId) {
		TodoService.deleteTodo(todoId);
		TodoService.getAllTodos();
	};

	$scope.updateTodo = function(todoId,olddata){
		TodoService.updateTodo(todoId,olddata);
		TodoService.getAllTodos();
	};

	$scope.init();
});
//console.log($scope.todos);