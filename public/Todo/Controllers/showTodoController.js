angular.module("todoapp").controller('EditTodoController', function($scope, TodoService) {

	TodoService.getTodo($routeParams.id).then(function(todoData) {
		$scope.todo = todoData;
	}, function(err) {

	});

}); 