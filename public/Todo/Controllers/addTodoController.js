angular.module("todoapp").controller('AddTodoController', function($scope, TodoService) {
	$scope.checkboxModel = {
		value1 : false,
		value2 : true
     };

	$scope.addTodo = function(todoName,todoStatus) {
		TodoService.addTodo(todoName,todoStatus).then(function(resp) {

		}, function(err) {

		});
		//TODO: After the add is done sucessfully navigate Automatically back to the listTodo.html
		//TODO: Either allow the user to enter the status of the Todo when they are adding it OR on the list page use the check box to set the Bool value
	};
});