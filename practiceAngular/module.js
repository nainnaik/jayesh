(function (){
	angular.module("restaurantModule",['ngRoute']);


	angular.module('restaurantModule').config(function($routeProvider){
			$routeProvider
				.when('/',{
					controller: 'restaurantController',
					templateUrl: '../practiceAngular/view/recipes.html'				
				})
				
				.otherwise({ redirectTo:'/' });
		});


})();