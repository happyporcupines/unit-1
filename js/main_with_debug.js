//Select the third line by its ID
var thirdline = document.getElementById("thirdLine");
var counter = 0;

//log text for debugging
console.log(thirdline.innerHTML);

//every time you click the page, an alert appears and the third line logs how many times the counter has changed
thirdline.addEventListener("click", function(){
	alert("Hello");
	thirdline.innerHTML = "Changed it " + counter;
	counter = counter + 1; // Increment the counter each click
});

//set the data for the table
let cityPop = [
	{ city: 'Madison', population: 233209 },
	{ city: 'Milwaukee', population: 594833 },
	{ city: 'Green Bay', population: 104057 },
	{ city: 'Superior', population: 27244 }
];

//building the rows
function createTable(data) {
	//selecting the table and table body
	let table = document.querySelector("table");
	let tbody = document.querySelector("#tableBody");

	//looping through every city data object
	data.forEach(function(item) {
		//creating a content string
		let rowContent = `<tr><td>${item.city}</td><td>${item.population}</td></tr>`;
		// adding the content string in
		tbody.insertAdjacentHTML('beforeend', rowContent);
	});
}

//adding a third column based on population size
function addColumns(cityPop){
	//get all the current table rows
	document.querySelectorAll("tr").forEach(function(row, i){

		//first row is header row
		if (i == 0){
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
		} else {
			//for the other rows, determine size based on population
			let citySize;
			if (cityPop[i-1].population < 100000){
				citySize = 'Small';
			} else if (cityPop[i-1].population < 500000){
				citySize = 'Medium';
			} else {
				citySize = 'Large';
			}
			//appending the new cells onto the end
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
		}
	});
}

//makes the table randomly change colors
function addEvents(){
	//Select the table once to use for all events
	let table = document.querySelector("table");

	//Change background color randomly when the mouse moves over the table
	table.addEventListener("mouseover", function(){
		var color = "rgb(";

		//Generate 3 random numbers for red, green, and blue
		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);
			color += random;

			if (i < 2){
				color += ","; //add commas between numbers
			} else {
				color += ")";
			}
		}
		//style the table with the random color
		table.style.backgroundColor = color;
	});

	//click alert
	function clickme(){
		alert('Hey, you clicked me!');
	}

	//adding click alert to table
	table.addEventListener("click", clickme);
}
// ensures the table is loaded
window.onload = function() {
	createTable(cityPop); //creates table rows
	addColumns(cityPop);  //adds third column
	addEvents();          //atttaches hover/click features
};