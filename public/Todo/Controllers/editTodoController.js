angular.module("todoapp").controller('EditTodoController', function($scope, $routeParams, TodoService) {
$scope.id = $routeParams.id;

TodoService.getTodo($scope.id).then(function(todosData) {
		$scope.todos = todosData;
		console.log("Single todo that was pulled from the database: \n");
		console.log($scope.todos);
		console.log($scope.todos.name);
	}, function(err) {
	});

	$scope.save = function(editTodoName,editTodoStatus) {
		console.log($scope.todos.name);
		if(editTodoName == null){
			console.log("NO new name");
			editTodoName = $scope.todos.name ;
			TodoService.updateTodo($scope.id, editTodoName , editTodoStatus);
		}else if(editTodoStatus == null){
			console.log("NO new status");
			editTodoStatus = $scope.todos.isDone;
			TodoService.updateTodo($scope.id, editTodoName , editTodoStatus);
		}
		else{
			TodoService.updateTodo($scope.id, editTodoName , editTodoStatus);
		}
	};
});