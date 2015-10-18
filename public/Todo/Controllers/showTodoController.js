angular.module("todoapp").controller('ShowTodoController', function($scope, $routeParams, TodoService) {
$scope.id = $routeParams.id;

TodoService.getTodo($scope.id).then(function(todosData) {
		$scope.todos = todosData;
		console.log("Show todo item from the database: \n");
		console.log($scope.todos._id);
		console.log($scope.todos.name);
	}, function(err) {
	});
$scope.deleteTodo = function(todoId) {
	todoId = $scope.id;
		console.log("Below is the todoID that will be passed to the delete function:\n");
		console.log(todoId);
		TodoService.deleteTodo(todoId);
	};

	$scope.todoDone = function(editTodoStatus) {
		editTodoName = $scope.todos.name;
		console.log("varable vale passed to todoisdone: "+editTodoStatus);
		if(editTodoStatus == "done"){
			console.log("Changing isDone to true\n");
			editTodoStatus = true;
			TodoService.updateTodo($scope.id, editTodoName , editTodoStatus);
		}
		else{
			console.log("Changing isDone to false\n");
			editTodoStatus = false;
			TodoService.updateTodo($scope.id, editTodoName , editTodoStatus);
		}
	};
}); 