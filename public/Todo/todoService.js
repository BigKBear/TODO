//A service gets data and provides it for controllers
angular.module('todoapp').service('TodoService', function todo($http, $q, endPoint) {
	//angular constants OR value
	//console.log(myConfig);

	var TodoService = this;
	TodoService.todoList = {};

	TodoService.getAllTodos = function() {
		var defer = $q.defer();

		$http.get(endPoint).success(function(todoData) {
			//success
			defer.resolve(todoData);
			console.log(defer);
			console.log(defer.todos);
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})

		return defer.promise;
	}

	TodoService.addTodo = function(TodoService) {
		var defer = $q.defer();

		console.log(defer);
		console.log(TodoService);
		console.log(TodoService.addtodo);
		$http.post(endPoint, {
			name : TodoService.addtodo
		}).success(function(todoData) {
			//success
			console.log("Data saved good:" + TodoService.addtodo + " added to end point");
			defer.resolve(todoData);
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})

		return defer.promise;
	}

	TodoService.deleteTodo = function(todoId) {
		var defer = $q.defer();
		console.log(todoId);
		//console.log(defer.todos);
		console.log(defer);

		$http.delete(endPoint+todoId,{
			_id : todoId
		}).success(function(todoData) {
			//success
			defer.resolve(todoData);
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})

		return defer.promise;
	}

	TodoService.updateTodo = function(todoId, olddata) {
		console.log($scope);
		console.log(olddata);
		console.log($scope.todos[todoId].olddata);
		$http.put(endPoint, {
			_id : $scope.todos[todoId],
			name : TodoService.addtodo
		}).success(function(todoData) {
			//success
			defer.resolve(todoData);
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})
	}

	return TodoService;
});
