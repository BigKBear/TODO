var todoapp = angular.module('todoapp',[]);

todoapp.factory('Todos',function(){
	var todos ={};
	todos= [
	{name: 'Wash Dishes', isDone:'false'},
	{name: ' Put clothes in Machine', isDone:'false'},
	{name: 'Cook Food', isDone:'false'},
	{name: 'Clean Bath', isDone:'false'},
	{name: 'Hangout Clothes', isDone:'false'}
];
	return todos;
})

function TodosCtrl($scope, Todos){
	$scope.todos = Todos;
}