// Grab the Clock Hands
const HOURHAND = document.querySelector("#hour"),
      MINUTEHAND = document.querySelector("#minute"),
      SECONDHAND = document.querySelector("#second");

// Creates a JavaScript Date Object instance 
var date = new Date();

// Defining Variables for the Clock Hands Positions
let hrPosition = 20,
    minPosition = 130,
    secPosition = 267,
    // Defining Variables for the Time
    hr = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

// Set the Clock Hands Transform Styles
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";