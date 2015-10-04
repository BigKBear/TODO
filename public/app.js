var todoapp = angular
.module("todoapp",[])

.config(function(){
	// $routeProvider.when('/',{
	// 	templateURL:'Views/about.html',
	// 	controller:'TodoController'
	// })
	// .otherwise({
	// 	redirecTo:'/'
	// });
})
.value("endPoint", "https://sheltered-shore-4406.herokuapp.com/api/todos/")

/*.constant("myConfig",{
	"url": "https://sheltered-shore-4406.herokuapp.com/api/todos/"
})*/

/*

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