
//run repeatidly
// function timer(){
//     console.log('hello');
// }

// setInterval(timer,1000);



// run only one time
// function timer(){
//     console.log('hello');
// }
// setTimeout(timer,2000)


// var count=0;
// var interval;
// function timer(){
//     count++
//     console.log(count);
// }

// interval=setInterval(timer,1000);

// setTimeout(function(){
//     clearInterval(interval)
// },5000)




// stop watch

var min = document.getElementById('min');
var sec = document.getElementById('sec');
var msec = document.getElementById('msec');
var startBtn = document.getElementById('start-btn');

var count = 0;
var secCount = 0;
var minCount = 0;
var intrval;


function timer() {
    count++;
    msec.innerHTML = count;
    if (count == 100) {
        count = 0;
        secCount++;
        sec.innerHTML = secCount;
    }
    else if (secCount == 60) {
        secCount = 0;
        minCount++;
        min.innerHTML = minCount;
    }
}

function start() {

    intrval = setInterval(timer, 10);

    startBtn.disabled = true;

}

function stop() {
    clearInterval(intrval);
    startBtn.disabled = false;

}

function restart() {
    count = 0;
    secCount = 0;
    minCount = 0;
    msec.innerHTML = count;
    sec.innerHTML = secCount;
    min.innerHTML = minCount;
    clearInterval(intrval);
    intrval = setInterval(timer, 10);


}