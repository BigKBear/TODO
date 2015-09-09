/*var todoapp = angular.module("todoapp",[]);

todoapp.controller('getAllController', function($scope,todoService){
	var promise = todoService.getAllTodos();

	promise.then(function (data)
	{
		$scope.todos = data;
		console.log($scope.todos);
	}
	/*
	$http.get('tododata.json').success(function(response){
		console.log(response);
		$scope.todos = response;
		console.log($scope.todos);
	)
})*/
