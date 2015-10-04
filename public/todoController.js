angular.module("todoapp").controller('TodoController',['$scope', '$http', function($scope,$http){
	$scope.init = function(){
		$scope.getAll();
	}
	$url = 'https://sheltered-shore-4406.herokuapp.com/api/todos/';
/*
	$http.get($url).success(function(todoData){
		$scope.todos = todoData;
	});
*/
	$scope.getAll = function(){
		$http.get($url).success(function(todoData){
			$scope.todos = todoData;
		});
	};

	$scope.addTodo = function(){
		$http.post($url,{name:$scope.addtodo,isDone:false});
	};
	
	$scope.deleteTodo = function(todoId) {
		console.log($scope.todos[todoId]._id);
		$http.delete($url + $scope.todos[todoId]._id,{todoId})
	};

	$scope.updateTodo = function(todoId,olddata){
		console.log($scope);
		console.log(olddata);
		console.log($scope.todos[todoId].olddata);
		$http.put($url + $scope.todos[todoId]._id , $scope.Save ,{todoId})
	};

	$scope.init();
}]);
//console.log($scope.todos);