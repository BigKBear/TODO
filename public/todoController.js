angular.module("todoapp").controller('TodoController',['$scope', '$http', function($scope,todo){
	//$scope.todos = [];
	//var todoId=1;
	//$url = 'https://sheltered-shore-4406.herokuapp.com/api/todos/';
	$scope.init = function(){
		$scope.getAll();
	}

	$scope.getAll = function(){
		todo.getAllTodos()
		.then(function(res){
			//success
		},function(err){
			//error
		})
	}

	$scope.deletTodo = function(id){
		task.deletTodo(id)
		.then(function(res){
			//success
			$scope.getAll();
		},function(err){
			//error
		})
	}


	
	$scope.init();

/*
	$http.get('https://sheltered-shore-4406.herokuapp.com/api/todos/').success(function(todoData){
		$scope.todos = todoData;
	});
*/
	$scope.addTodo = function(){
		$http.post($rootScope.endPoint,{name:$scope.addtodo,isDone:false})
	};
/*	
	$scope.deleteTodo = function(todoId) {
		console.log($scope.todos[todoId]._id);
		$http.delete($rootScope.endPoint + $scope.todos[todoId]._id,{todoId})
	};
*/
	$scope.updateTodo = function(todoId,olddata){
		console.log($scope);
		console.log(olddata);
		console.log($scope.todos[todoId].olddata);
		$http.put($rootScope.endPoint + $scope.todos[todoId]._id + data,{todoId})
	};
}]);
//console.log($scope.todos);