//changed parameter name to geoData to be more descriptive
function debugCallback(geoData){
	//Using 'geoData' instead of the other variable
	//returns the geoData but with spaces
	var formattedData = JSON.stringify(geoData, null, 2);
	//preserve the formatting so it doesn't all end up one line
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<pre>' + formattedData + '</pre>');
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

//start the function but make sure things load before executing
document.addEventListener('DOMContentLoaded', function(){
	debugAjax();
});