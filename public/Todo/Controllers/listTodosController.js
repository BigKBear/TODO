angular.module("todoapp").controller('ListTodosController', function($scope, TodoService) {

	TodoService.getAllTodos().then(function(todosData) {
		$scope.todos = todosData;
	}, function(err) {

	});

	$scope.getTotalTodos = function() {
		$totalTodos = $scope.todos.length;
		return $totalTodos;
	};

	
	$scope.getTotalCheckedTodos = function() {

	};

	$scope.deleteTodo = function(todoId) {
		console.log("Below is the todoID that will be passed to the delete function:\n");
		console.log(todoId);
		TodoService.deleteTodo(todoId);
	};

	$scope.getTodo = function(todoObjectforEditing){
		TodoService.updateTodo(todoObjectforEditing);
	};

	$scope.showTodo = function(todoToShow)	 {
		TodoService.getTodo(todoToShow);	
	};

}); 
/*
console.log(todoObjectforEditing);
		console.log(todoObjectforEditing._id);
		console.log(todoObjectforEditing.name);
		console.log(todoObjectforEditing.__v);*/