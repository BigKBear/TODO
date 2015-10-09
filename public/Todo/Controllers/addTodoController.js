angular.module("todoapp").controller('AddTodoController', function($scope, TodoService) {
	$scope.addTodo = function(todo) {
		TodoService.saveTodo(todo).then(function(todoData) {

		}, function(err) {

		});
	};
});
