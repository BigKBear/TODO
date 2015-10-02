angular.module("todoapp").controller('TodoController',['$scope', 'TodoService' function($scope,TodoService){
	//$scope.todos = [];
	//var todoId=1;

	TodoService.getAllTodos();

	$scope.addTodo = function(){
		$http.post('https://sheltered-shore-4406.herokuapp.com/api/todos/',{name:$scope.addtodo,isDone:false})
	};
	
	$scope.deleteTodo = function(todoId) {
		console.log($scope.todos[todoId]._id);
		$http.delete('https://sheltered-shore-4406.herokuapp.com/api/todos/'+ $scope.todos[todoId]._id,{todoId})
	};

	$scope.updateTodo = function(todoId){
		$http.put('https://sheltered-shore-4406.herokuapp.com/api/todos/',{name:$scope.addtodo,isDone:false})
	};
}]);

//console.log($scope.todos);