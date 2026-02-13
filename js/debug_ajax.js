//changed parameter name to geoData to be more descriptive
function debugCallback(geoData){
	//Using 'geoData' instead of the other variable
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(geoData));
};

function debugAjax(){
	//Start the fetch request
	fetch("data/MegaCities.geojson")
		.then(function(response){
			//Correctly returning the response as JSON
			return response.json();
		})
		.then(function(data){
			//Passing the actual data into the callback function
			//This ensures the data is caught before it's used
			debugCallback(data);
		});
};

//start the function
debugAjax();