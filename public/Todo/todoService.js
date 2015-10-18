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
			console.log("The data that was pulled from the server: \n");
			console.log(todoData);
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})

		return defer.promise;
	}

	TodoService.getTodo = function(singleTodoId){
		var defer = $q.defer(singleTodoId);

		$http.get(endPoint+singleTodoId).success(function(todoData) {
			//success
			defer.resolve(todoData);
			/*console.log("Single todo that was pulled from the database: \n");
			console.log(todoData);*/
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})

		return defer.promise;

	}

	TodoService.addTodo = function(todoName,todoStatus) {
		var deferred = $q.defer(todoName,todoStatus);

		//console.log(deferred);
		console.log(todoName);
		console.log(todoStatus);
		//console.log(TodoService.addtodo);
		$http.post(endPoint, {
			name : todoName,
			isDone: todoStatus
		}).success(function(todoData) {
			//success
			console.log("Data saved good: " + todoName + " was added to end point with status " + todoStatus);
			deferred.resolve(todoData);
		}).error(function(err, status) {
			//error
			deferred.reject(err);
		})

		return deferred.promise;
	}

	TodoService.deleteTodo = function(todoId) {
		var defer = $q.defer(todoId);
		console.log("ID passed to delete function good");

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

	TodoService.updateTodo = function(oldData) {
		var defer = $q.defer(oldData);
		console.log("The old data to be updated is:\n");
		console.log(oldData);
		//console.log(newData);

		//TODO: Payload must have gotten the new data to be saved
		$http.put(endPoint+oldData._id, {
			_id : oldData._id,
			name : oldData.name
		}).success(function(todoData) {
			//success
			defer.resolve(todoData);
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})
	}

	TodoService.saveTodo = function(todoItemSelectedForEdit, updatedTodoName, updatedTodoStatus) {
		var defer = $q.defer(todoItemSelectedForEdit);
		console.log("The edit page name is:\n");
		console.log(updatedTodoName);
		console.log("The edit page status is:\n");
		console.log(updatedTodoStatus);

		/*$http.put(endPoint+todoItemSelectedForEdit._id, {
			name : updatedTodoName,
			__v : updatedTodoStatus
		}).success(function(todoData) {
			//success
			defer.resolve(todoData);
		}).error(function(err, status) {
			//error
			defer.reject(err);
		})*/
	}

	return TodoService;
});
