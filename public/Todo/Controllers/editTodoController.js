angular.module("todoapp").controller('EditTodoController', function($scope, TodoService) {

	$scope.getTodo = function(todoObjectforEditing){
		console.log(todoObjectforEditing);
		console.log(todoObjectforEditing._id);
		console.log(todoObjectforEditing.name);
		console.log(todoObjectforEditing.__v);
		TodoService.getTodo(todoObjectforEditing);
	};

//ng-click="getTodo(todo._id)"
	$scope.save = function(todo) {
		TodoService.updateTodo(todo);
	};

	$scope.getTodo = function(todoObjectforEditing){
		TodoService.updateTodo(todoObjectforEditing);
	};
});