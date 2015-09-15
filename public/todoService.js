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