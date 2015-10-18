angular.module("todoapp").controller('EditTodoController', function($scope,$routeParams, TodoService) {
$scope.id = $routeParams.id;

TodoService.getTodo($scope.id).then(function(todosData) {
		$scope.todos = todosData;
		console.log("Single todo that was pulled from the database: \n");
		console.log($scope.todos);
		console.log($scope.todos.name);
	}, function(err) {
	});

//console.log(TodoService.getTodo($scope.id));

	$scope.getTodo = function(todoid){
		TodoService.getTodo($scope.id);
	};

//ng-click="getTodo(todo._id)"
	$scope.save = function(editTodoName,editTodoStatus) {
		TodoService.updateTodo(editTodoName , editTodoStatus);
	};

	$scope.getTodo = function(todoObjectforEditing){
		TodoService.updateTodo(todoObjectforEditing);
	};
});