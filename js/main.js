
// Select the elements:
var hourElement = document.getElementById("hour-arm");
var minElement = document.getElementById("min-arm");
var secElement = document.getElementById("sec-arm");
// console.log(hourElement);
// console.log(minElement);
// console.log(secElement);

/* Get the current time and display it
   each one second
*/
function currentTime(){
    // Get the current time:
    var currTime = new Date();
    // console.log(currTime);

    // Get hour 
    var currHour = currTime.getHours();
    // Get minute
    var currMin = currTime.getMinutes();
    // Get second
    var currSec = currTime.getSeconds();

    console.log(`${currHour} : ${currMin} : ${currSec}`);
    armsPosition(currHour, currMin, currSec);
}


/* Handle 3 arms rotation:
   - Function Name: armsPosition
   - Function Arguments: 
        hour ==> current hour
        min  ==> current minute
        sec  ==> current second
   - Function working: 
        position of hour: current hour multiplied by 30
        position of minute: current minute multiplied by 6
        position of second: current second multiplied by 6

   - Explanation:
        hour-arm : 0, 30, 60, 90, 120, 150, 180,
                    210, 240, 270, 300, 330, 360
                    rotation angles: (iH + 30)
                    if iH == 360 ...>  iH = 0

            minute-arm and second-arm: 
                rotate 60 times each cycle
                rotation angles: (iM + 6)
                                (iS + 6)
                if iS == 360 ...> iS = 0 and change
                                the minute-arm by 6 deg
                if iM == 360 ...> iM = 0 and change
                                the hour-arm by 30 deg
                        
*/
function armsPosition(hour, min, sec){
    var hArm, iH = 30;
    var mArm, iM = 6;
    var sArm, iS = 6;

    // position of hour-arm:
    hArm = hour * iH + (min/12);
    // position of minute-arm:
    mArm = min * iM;
    // position of second-arm:
    sArm = sec * iS;

    // for testing the value of angles
    // document.getElementById("display").innerHTML = `Hour angle: ${hArm}   
    // Minute angle: ${mArm}
    // Second angle ${sArm}`;
    
    hourElement.style.transform = `rotate(${hArm}deg)`;
    minElement.style.transform = `rotate(${mArm}deg)`;
    secElement.style.transform = `rotate(${sArm}deg)`;
}

currentTime();
setInterval(currentTime, 1000);