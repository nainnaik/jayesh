(function(){

		var restaurantController = function(restaurantService){

			this.reverse=false;

			this.recipes=[];

			function init(){

				this.recipes=restaurantService.getRecipes();

				}
			init();
			
                this.doSort=function(propName){                	
                	this.sortBy=propName;
                	this.reverse=!this.reverse;
                };  

    };
    restaurantController.$inject=["restaurantService"];
    angular.module("restaurantModule").controller("RestaurantController",restaurantController);

})();