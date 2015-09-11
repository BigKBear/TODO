//A service gets data and provides it for controllers

angular.module("todoapp").service("TodoService",function($http,$q)
{
	var deferred = $q.defer();//it is a prommis that will be called after alll the other stiff is done
	$http.get('tododata.json').then(function(data){
		deferred.resolve(data);
	});

	//function that returns the defered promise
	this.getAllTodos = function()
	{
		return deferred.promise;
	}
})


angular.module("todoapp").controller('TodoController',['$scope', '$http', function($scope,$http){
	$scope.todos = [];
	//var todoId=1;

	$http.get('https://sheltered-shore-4406.herokuapp.com/api/todos/').success(function(todoData){
		$scope.todos = todoData;
		console.log($scope.todos);
	});

	$scope.deleteTodo = function(todoId) {
		$http.delete( 'https://sheltered-shore-4406.herokuapp.com/api/todos/' +todoId);
	};

	$scope.updateTodo = function(todoId){
		$http.put('https://sheltered-shore-4406.herokuapp.com/api/todos/' +todoId, $scope.name, $scope.isDone);
	};

	$scope.newtodo = function(){
		$http.post();
	}



}]);
