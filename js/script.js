
document.addEventListener("DOMContentLoaded", 
	function (event){

		document.querySelector("button").addEventListener("click",function(){
		  	var self= this;
			var name="";
			//call the server to get data (here its name)
				$ajaxUtils.sendGetRequest("data/name.json", 
					function(res) {
						var message= res.fname+"" +res.father ;				
						//console.log(self.name);
						document.queryselector("#content").innerHTML = " <h2> Hello </h2>" + name;
					});			 				
		});		
	}
);