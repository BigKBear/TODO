angular.module("todoapp").controller('EditTodoController', function($scope, TodoService) {

	$scope.getTodo = function(todoObjectforEditing){
		TodoService.getTodo(todoObjectforEditing);
	};

//ng-click="getTodo(todo._id)"
	$scope.save = function(editTodoName,editTodoStatus) {
		TodoService.updateTodo(editTodoName , editTodoStatus);
	};

	$scope.getTodo = function(todoObjectforEditing){
		TodoService.updateTodo(todoObjectforEditing);
	};
});