var thirdline = document.getElementById("thirdLine");
var counter = 0
console.log(thirdline.innerHTML)
thirdline.addEventListener("click", function(){
	alert("Hello")
	thirdline.innerHTML = "Changed it " + counter;
	counter=counter+1
});
let cityPop = [
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

		row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	}
    })
}

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";}
		}

		document.querySelector("table").style.backgroundColor = color;
	})

	function clickme(){

		alert('Hey, you clicked me!');
	}

	document.querySelector("table").addEventListener("click", clickme)
}

addColumns(cityPop);
addEvents();