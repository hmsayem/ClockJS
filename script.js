const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

    var seconds = date.getSeconds();
    var minutes = date.getMinutes() + (seconds/60);
    var hours = date.getHours() + (minutes/60);

    var h = hours* (360 / 12);
    var m = minutes * (360 / 60);
    var s = seconds * (360 / 60);

function run(){
    s += 6;
    m += 1/10;
    h += 1/120;
    HOURHAND.style.transform = "rotate(" + h + "deg)";
    MINUTEHAND.style.transform = "rotate(" + m + "deg)";
    SECONDHAND.style.transform = "rotate(" + s + "deg)";
}


var interval = setInterval(run, 1000);
//clearInterval(interval);


