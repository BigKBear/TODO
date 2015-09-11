angular.module("todoapp").controller('TodoController',['$scope', function($scope,$http){
	//$scope.todos = [];
	//var todoId=1;

	$http.get('https://sheltered-shore-4406.herokuapp.com/api/todos/').success(function(todoData){
		$scope.todos = todoData;
	});

	$scope.addTodo = function(){
		$http.post('https://sheltered-shore-4406.herokuapp.com/api/todos/',{name:$scope.addtodo,isDone:false})
	};
	
	$scope.deleteTodo = function(todoId) {
		$http.delete( 'https://sheltered-shore-4406.herokuapp.com/api/todos/',{_id:$scope.todoId})
	};

	$scope.updateTodo = function(todoId){
		$http.put('https://sheltered-shore-4406.herokuapp.com/api/todos/',{name:$scope.addtodo,isDone:false})
	};
}]);
//console.log($scope.todos);