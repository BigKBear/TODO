angular.module("todoapp").controller('EditTodoController', function($scope, TodoService) {
	$scope.edittodo = {
		name : 'edit object on dollar scope',
		isDone : false
	}
}); 