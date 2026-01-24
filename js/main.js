var thirdline = document.getElementById("thirdLine");
var counter = 0
console.log(thirdline.innerHTML)
thirdline.addEventListener("click", function(){
    alert("Hello")
    thirdline.innerHTML = "Changed it " + counter;
    counter=counter+1                         
})