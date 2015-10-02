//A service gets data and provides it for controllers

angular.module('myServiceModule', []).
factory('TodoService', ['$http', function($http) {
	var svc = {};

	svc.getAllTodos = function() {
		$http.get('https://sheltered-shore-4406.herokuapp.com/api/todos/').success(function(todoData){
			$scope.todos = todoData;
		});
	};

	return svc;
  
 }]);