(function(){
	var restaurantService= function(){
	var recipes=[
                    {
                        name:'SPECIAL KABAB PLATTER',
                        image:'png',
                        category:'Appitizer',
                        lable:'hot',
                        price:'10.99',
                        ingradients:'Shrimps, Lamb Seekh Kabab, and Chicken Tikka sauteed with onions, bell peppers, and fresh spices', 
                        comment:'' 
                    }, 

                    {
                        name:'PANEER MAKHANI',
                        image:'png',
                        category:'Mains',
                        lable:'',
                        price:'4.99',
                        ingradients:' Homemade cottage cheese cooked with fresh tomato sauce, butter and mild Indian spices unique combination of indian and italian pizza', 
                        comment:''  
                    },

                    {

                        name:'VEGETABLE PAKORA',
                        image:'../images/zucchipakoda.png',
                        category:'Appitizer',
                        lable:'New',
                        price:'1.99',
                        ingradients:'Mixed Vegetable fritters bound in a delicious chickpea flour batter', 
                        comment:''   
                    },
                    
                    {
                        name:'GULAB JAMUN',
                        image:'../images/elaicheesecake.png',
                        category:'Dessert',
                        lable:'sweet',
                        price:'4.99',
                        ingradients:'Dry milk and cottage cheese balls, deep in honey syrup and rose water', 
                    }

            	];     

		
		this.getRecipes=function(){
			return recipes;
		};
		

	};
	angular.module("restaurantModule").service("RestaurantService",restaurantService);

})();