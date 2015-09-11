
angular.module("todoapp").controller('TodoController', function($scope, TodoService){
	$scope.todos = [];
	
	TodoService.getAllTodos().then(function (data) {
		$scope.todos = data.data;
		console.log($scope.todos);
		console.log(data.data);
	});//we should not now be getting the data the data should already been here "route resolve"

	$scope.addTodo= function(){
		if(!$scope.addtodo) {
			console.log("you did not enter a todo");
			return false;
		} 

		$scope.todos.push({
			name:$scope.addtodo,
			isDone:false
		});
		$scope.addtodo="";
	};
/*
	$scope.deleteTodo= function(index){
		$scope.todos.splice($scope.todos.indexOf(index));	
		console.log("deleted");
	};*/

	// Get Total Items
	$scope.getTotalTodos= function () {
	    return $scope.todos.length;
	};

	// Get Total Checked Items
	$scope.getTotalCheckedTodos = function () {
		var doneNumber = 0;
	    for (var i = 0; i < $scope.todos.length; i++) {
	    	if ($scope.todos[i].isDone) {
	    		doneNumber++;
	    	}
	    };
	    return doneNumber;
	};

	// Change false to true
	$scope.toggleChecked = function (todo) {
		console.log(todo.isDone);
	    todo.isDone = !todo.isDone;
	};
});
