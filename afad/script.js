const cityId = document.querySelector('path').id;
const cityName = document.querySelector('path').getAttribute('name');

document.getElementById('map').addEventListener("click", myFunction);



function myFunction(event) {

    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var coor = "X coords: " + x + ", Y coords: " + y;
    
    // var element = document.querySelector("path");
    // element.classList.add("red");
    // cityId.classList.add('red');
  };


