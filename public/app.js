var todoapp = angular.module("todoapp", ['ngRoute']).config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
	$routeProvider.when('/editTodo', {
		templateUrl : 'Todo/Views/editTodo.html'
		//,controller:'editTodoController'
	}).when('/addTodo', {
		templateUrl : 'Todo/Views/addTodo.html'
		//,controller:'addTodoController'
	}).otherwise({
		redirecTo : '/addTodo'
	});

	//$locationProvider.html5Mode(true);
	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	});

}]).value("endPoint", "https://sheltered-shore-4406.herokuapp.com/api/todos/")

/*.constant("myConfig",{
 "url": "https://sheltered-shore-4406.herokuapp.com/api/todos/"
 })

 .run(function ($rootScope){
 $rootScope.endPoint = 'https://sheltered-shore-4406.herokuapp.com/api/todos/'
 });

 .controller(function(routeProvider), $locationProvider){
 //here is routing code for implementing routing
 $routeProvider
 .when('/home',{
 templateURL:'/index.html',
 controller:'todoController'
 })
 .when('/about',{
 templateURL:'/about.html',
 controller:'aboutController'
 })
 .when('/todos',{
 templateURL:'/error.html',
 controller:'errorController'
 })
 .otherwise({
 templateURL:'/error.html',
 controller:'errorController'
 })
 })

 .controller("aboutController",function($scope){
 $scope.Message = "This is about page";
 })

 .controller("errorController",function($scope){
 $scope.Message = "404 Not Found!";
 })

 .controller("todoController",function($scope){
 $scope.Message = "This is aboutController page";
 })*/