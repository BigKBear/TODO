//A service gets data and provides it for controllers

angular.module('todoapp')
.service('TodoService', function todo($http, $q, endPoint) {
	//angular constants OR value
	//console.log(myConfig);

	var TodoService = this;
	TodoService.todoList = {};

	TodoService.getAllTodos = function(){
		var defer =$q.defer();

		$http.get(endPoint)
		.success(function(todoData){
			//success
			//TodoService.todoList = todoData;
			defer.resolve(todoData);
		})
		.error(function(err, status){
			//error
			defer.reject(err);
		})

		return defer.promise;
	}

	TodoService.addTodo = function(TodoService){
		var defer = $q.defer();

		console.log(defer);
		console.log(TodoService);
		console.log(TodoService.addtodo);
		/*$http.post(endPoint + ':name'+TodoService)
		.success(function(todoData){
			//success
			defer.resolve(todoData);
		})
		.error(function(err, status){
			//error
			defer.reject(err);
		})*/

		return defer.promise;
	}

	TodoService.deleteTodo = function(todoId) {
		var defer = $q.defer();

		$http.delete(endPoint +'/?_id', todoId)
		.success(function(todoData){
			//success
			defer.resolve(todoData);
		})
		.error(function(err, status){
			//error
			defer.reject(err);
		})

		return defer.promise;
	}

	TodoService.updateTodo = function(todoId,olddata){
		console.log($scope);
		console.log(olddata);
		console.log($scope.todos[todoId].olddata);
		$http.put(endPoint + '/{', TodoService,+ '}')
		.success(function(todoData){
			//success
			defer.resolve(todoData);
		})
		.error(function(err, status){
			//error
			defer.reject(err);
		})
	}

	return TodoService;
 });

/*


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
 */