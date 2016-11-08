(function  (global) {
	var ajaxUtils={};
	function getRequestObject(){
		if (window.XMLHttpRequest){ return(new XMLHttpRequest());
		}
		else if(window.ActiveXObject){
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax not supported");
			return (null);
		}
	}
	
	// ajax  GET request 
	ajaxUtils.sendGetRequest =function(requestUrl,responseHandler,isJsonResponse){
		var request= getRequestObject();

		resuest.onreadystatechange = function(){ 	
			handleResponse(request,responseHandler,isJsonResponse);
		};
		request.opem("GET",requestUrl,true);
		request.send(null);
	};

	function handleResponse(request,responseHandler,isJsonResponse){ 
		if((request.readyState==4) && (request.status==200)){

			if(isJsonResponse==undefined){
				isJsonResponse=true;
			}

			if (isJsonResponse){
				responseHandler(json.parse(request.responseText));
			}
			else{
				responseHandler(request.responseText);
			}

		}
	}

	//expose utility

	global.$ajaxUtils=ajaxUtils;


})();