

// setInterval(function(){
//     console.log("helo user")
// },1000);






// function greetingUser(){
//     console.log('Helo user');
// }

// setInterval(greetingUser,1000);





// var i=0;
// function greetingUser(){
//     console.log(i++);
//     if(i>5){
//         clearInterval(timeScope);
//     }
// }

// var timeScope=setInterval(greetingUser,1000);







//setTimeout ------(aik dafa chaly ga)
//setinterval ------(bar bar chaly ga)

// var h1=document.getElementById("greet-user");

// function greetUser(){
//     h1.innerHTML='Hello Murad welcome to our page';
// }

// setTimeout(greetUser,2000);







/* *********stop watch *************** */



// var miliSecCounter = document.getElementById('mili-sec-counter');
// var secCounter = document.getElementById('sec-counter');
// var minutCounter = document.getElementById('minut-conuter');
// var sec = 59;
// var mint = 59;
// var milliSec = 59;
// function timer() {
//     minutCounter.innerHTML =  mint;
//     secCounter.innerHTML = " : " + sec;
//     miliSecCounter.innerHTML = " : " + milliSec--;
//     if (milliSec < 0) {
//         milliSec = 59;
//         secCounter.innerHTML = sec--;
//         console.log("milisec")
//         if (sec < 0) {
//             sec=59;
//             minutCounter.innerHTML=mint--;
//             if(mint<0){
//                 clearInterval(stopWatch);
//             }
//         }
//     }
// }

// var stopWatch = setInterval(timer, 10);















/* ######### Digital clock ########### */



var hourCounter = document.getElementById('hour-counter');
var minutCounter = document.getElementById('minut-conuter');
var secCounter = document.getElementById('sec-counter');
var hour = 0;
var mint = 0;
var sec = 0;
function timer() {
    hourCounter.innerHTML = hour;
    minutCounter.innerHTML = " : " + mint;
    secCounter.innerHTML = " : " + sec++;
    if (sec > 59) {
        sec = 0;
        minutCounter.innerHTML = mint++;
        if (mint > 59) {
            mint = 0;
            hourCounter.innerHTML = hour++;
            if (hour > 12) {
                clearInterval(stopWatch);
            }
        }
    }
}

var stopWatch = setInterval(timer, 1000);