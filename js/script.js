// Grab the Clock Hands
const HOURHAND = document.querySelector("#hour"),
      MINUTEHAND = document.querySelector("#minute"),
      SECONDHAND = document.querySelector("#second");

function runTheClock() {
    // Creates a JavaScript Date Object instance 
    var date = new Date();

    let 
        // Defining Variables for the Time
        hr = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),

        // Defining Variables for the Clock Hands Positions
        hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12),
        minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60),
        secPosition = sec * 360 / 60;

    // Set the Clock Hands Transform Styles
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 500);