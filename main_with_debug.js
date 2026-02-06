var thirdline = document.getElementById("thirdLine");
var counter = 0
console.log(thirdline.innerHTML)
thirdline.addEventListener("click", function(){
	alert("Hello")
	thirdline.innerHTML = "Changed it " + counter;
	counter=counter+1
});

let cityPop = [ // had to get all the "cityPop" variables to match
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// adding function to create table

function createTable(data) {
    let table = document.querySelector("table");
    let tbody = document.querySelector("#tableBody");

    data.forEach(function(item) {
        let rowContent = `<tr><td>${item.city}</td><td>${item.population}</td></tr>`;
        tbody.insertAdjacentHTML('beforeend', rowContent);
    });
}

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		let citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		}

		row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>'); // fixed line
    	} // fixed spelling
    })
}

function addEvents(){
    // Grab the table once and reuse it
    let table = document.querySelector("table");

    table.addEventListener("mouseover", function(){
        var color = "rgb(";

        for (var i=0; i<3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;

            if (i < 2){
                color += ",";
            } else {
                color += ")";
            }
        }

        table.style.backgroundColor = color;
    });

    function clickme(){
        alert('Hey, you clicked me!');
    }

    table.addEventListener("click", clickme);
} 

// load entire table on initial load (no missing table)
window.onload = function() {
    createTable(cityPop);
    addColumns(cityPop);
    addEvents();
};
