// Grab the clock hands
const HOURHAND = document.querySelector("#hour"),
      MINUTEHAND = document.querySelector("#minute"),
      SECONDHAND = document.querySelector("#second");

// Set the hands positions
let hrPosition = 20,
    minPosition = 130,
    secPosition = 267;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";