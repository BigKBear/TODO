angular.module("todoapp").controller('AddTodoController', function($scope, TodoService) {
	TodoService.addTodo().then(function(todoData) {

		}, function(err) {

		});

	$scope.addTodo = function() {
		
	};
});
