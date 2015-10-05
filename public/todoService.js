//A service gets data and provides it for controllers

angular.module("todoapp").service("TodoService",function todo($http, $q, $rootScope) {
	var todo = this;

	todo.getAllTodos = function(){
		var defer = $q.defer();

		$http.get('https://sheltered-shore-4406.herokuapp.com/api/todos/').success(function(todoData){
		defer.resolve(todoData);//$scope.todos = todoData;
	})
		.error(function(err, status){
			defer.reject(err);
		})
		return defer.promise;
	}
	
	todo.createTodo = function(todo){
		var defer = $q.defer();
		$http.post($rootScope.endPoint,{name:$scope.addtodo,isDone:false}).success(function(res){
			defer.resolve(res);
		})
		.error(function(err,status){
			defer.reject(err);
		})
		return defer.promise;
	}

	todo.deleteTodo = function(id){
		var defer = $q.defer();

		$http.delete($rootScope.endPoint + $scope.todos[todoId]._id,{todoId}).success(function(res){
			defer.resolve(res);
		})
		.error(function(err, status){
			defer.reject(err);
		})

		return defer.promise;
	}
	return todo;
});
