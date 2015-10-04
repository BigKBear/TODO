angular.module("todoapp").controller('TodoController', function($scope,TodoService){
	//$modal is part of angular bootstrap model like a jquary model is is not only for http request

	$scope.init = function(){
		$scope.getAll();
	}


	$scope.getAll = function(){
		TodoService.getAllTodos()
		.then(function(res){
			//success
			
		},function(err){
			//error
		});
	};

	$scope.addTodo = function(){
		TodoService.addTodo($scope)
		.then(function(res){
			//success
		},function(err){
			//error
		});
	};
	
	$scope.deleteTodo = function(todoId) {
		TodoService.deleteTodo(todoId)
		.then(function(res){
			//success
		},function(err){
			//error
		});
	};

	$scope.updateTodo = function(todoId,olddata){
		TodoService.updateTodo(todoId,olddata)
		.then(function(res){
			//success
		},function(err){
			//error
		});
	};

	$scope.init();
});
//console.log($scope.todos);