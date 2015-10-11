angular.module("todoapp").controller('ShowTodoController', function($scope, TodoService) {

	TodoService.getTodo(todo._id).then(function(todoData) {
		$scope.todo = todoData;
	}, function(err) {

	});

}); 