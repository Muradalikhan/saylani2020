
// var rightNow = new Date();
// console.log(rightNow);

// var dayNames = ["Sunday", "MOnday", "tuesday", "wednesday", "thirsday", "friday", "saturday"]
// var dayNum = rightNow.getDay();
// var printDay=dayNames[dayNum];
// console.log(printDay);






// var rightNow = new Date();
// var currentMonth=rightNow.getMonth();
// var currentHour=rightNow.getHours();
// var currentMint=rightNow.getMinutes();
// var currentSecond=rightNow.getSeconds();
// var currentMilliSec=rightNow.getMilliseconds();
// var milliSecondFromStart=rightNow.getTime();

// console.log(currentSecond)




// //finding your birthday day
// var rightNow = new Date("July 26,1995");
// console.log(rightNow);



// var today = new Date();
// var eidDay = new Date("May 24,2020");

// var milliSecondOfToday = today.getTime();
// var milliSecondOfEid = eidDay.getTime();

// console.log(milliSecondOfEid);
// var diffrence = milliSecondOfEid - milliSecondOfToday;
// var leftDays= diffrence/(1000*60*60*24);
//     leftDays=Math.floor(leftDays);
// console.log(leftDays);




// Assignment
// how many days have passed since your birthday?
// how many days have passed scince your last birhtday?
// how many days ar remaing for your upcoming birthday?

// first answer
var getel=document.getElementById("result");
function totaldays(){
    var today = new Date();
    var bornDay = new Date("July 26,1995");
    
    var milliSecondOfToday = today.getTime();
    var milliSecOfBirthday = bornDay.getTime();
    
    var diffrence = milliSecondOfToday - milliSecOfBirthday;
    var totalDaysPassed= diffrence/(1000*60*60*24);
    totalDaysPassed=Math.floor(totalDaysPassed);
    console.log(totalDaysPassed);
    getel.innerHTML=totalDaysPassed;
}



// Second answer
var today = new Date();
var lastBirthday = new Date("July 26,2019");

var milliSecondOfToday = today.getTime();
var milliSecOfBirthday = lastBirthday.getTime();

var diffrence = milliSecondOfToday - milliSecOfBirthday;
var totalDaysPassed= diffrence/(1000*60*60*24);
totalDaysPassed=Math.floor(totalDaysPassed);
console.log(totalDaysPassed);



// third answer
var today = new Date();
var upComingBirthday = new Date("July 26,2020");

var milliSecondOfToday = today.getTime();
var milliSecOfBirthday = upComingBirthday.getTime();

var diffrence =  milliSecOfBirthday-milliSecondOfToday;
var totalDaysPassed= diffrence/(1000*60*60*24);
totalDaysPassed=Math.floor(totalDaysPassed);
console.log(totalDaysPassed);