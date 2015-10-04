//A service gets data and provides it for controllers

angular.module('myServiceModule', []).
factory('TodoService', ['$http', function($http) {
	var svc = {};
	$url = 'https://sheltered-shore-4406.herokuapp.com/api/todos/';

	svc.getAllTodos = function(){
		$http.get($url).success(function(todoData){
			$scope.todos = todoData;
		});
	};

	svc.addTodo = function(){
		$http.post($url,{name:$scope.addtodo,isDone:false});
	};
	
	svc.deleteTodo = function(todoId) {
		console.log($scope.todos[todoId]._id);
		$http.delete($url + $scope.todos[todoId]._id,{todoId})
	};

	svc.updateTodo = function(todoId,olddata){
		console.log($scope);
		console.log(olddata);
		console.log($scope.todos[todoId].olddata);
		$http.put($url + $scope.todos[todoId]._id , $scope.Save ,{todoId})
	};

	return svc;
  
 }]);