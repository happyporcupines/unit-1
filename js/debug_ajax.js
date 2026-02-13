
// Function to handle the data once it arrives
//Using geoData instead of the other variable
function debugCallback(geoData){
	//preserve the formatting so it doesn't all end up one line
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(geoData));
}

function debugAjax(){
	//Start the fetch request
	fetch("data/MegaCities.geojson")
		.then(function(response){
			//Correctly returning the response as JSON
			return response.json();
		})
		.then(function(geoData){
			//Passing the actual data into the callback function
			//This ensures the data is caught before it's used
			debugCallback(geoData);
		});

	//The code that was here ran too early (before the data arrived)
}

//The global code that was here ran too early
document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data is loading');

// Run the function!
debugAjax();