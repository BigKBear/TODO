angular.module("todoapp").controller('ListTodosController', function($scope, TodoService) {

	TodoService.getAllTodos().then(function(todosData) {
		$scope.todos = todosData;
	}, function(err) {

	});

	$scope.getTotalTodos = function() {
		//TodoService.getAllTodos();
	};

	
	$scope.getTotalCheckedTodos = function() {
		
	};

	$scope.deleteTodo = function(todoId) {
		console.log(todoId);
		TodoService.deleteTodo(todoId);
	};
}); 