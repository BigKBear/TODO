//A service gets data and provides it for controllers
var todoapp = angular.module("todoapp",[]);

todoapp.service("TodoService",function($http,$q)
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
//added function to have somthing different to merge
todoapp.service("TodoService2",function($http,$q)
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

.controller('getAllController', function($scope, TodoService){
	var promise = TodoService.getAllTodos();

	promise.then(function (data)
	{
		$scope.todos = data.data;
		console.log($scope.todos);
	}
	/*
	$http.get('tododata.json').success(function(response){
		console.log(response);
		$scope.todos = response;
		console.log($scope.todos);*/
	)
})
