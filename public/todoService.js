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

	this.addTodo = function(){
		$http.post('https://sheltered-shore-4406.herokuapp.com/api/todos/',{name:$scope.addtodo,isDone:false})
	};
	
	this.deleteTodo = function(todoId) {
		$http.delete( 'https://sheltered-shore-4406.herokuapp.com/api/todos/',{_id:$scope.todoId})
	};

	this.updateTodo = function(todoId){
		$http.put('https://sheltered-shore-4406.herokuapp.com/api/todos/',{name:$scope.addtodo,isDone:false})
	};
})