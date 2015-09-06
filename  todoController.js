var todoapp = angular.module('todoapp',[]);

todoapp.controller('getAllController', ['$scope', function($scope) {
    var todos ={};
	var getAllTodos = function(){
	[
	{name: 'Wash Dishes', isDone:'false'},
	{name: ' Put clothes in Machine', isDone:'false'},
	{name: 'Cook Food', isDone:'false'},
	{name: 'Clean Bath', isDone:'false'},
	{name: 'Hangout Clothes', isDone:'false'}
];
	return todos;
    };
}]);