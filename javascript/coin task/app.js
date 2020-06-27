
var getRef = document.getElementById('result');

function rollCoin(el) {
    var randomNum = Math.floor(Math.random() * 2 + 1);
    if (el == 2) {
        if (randomNum == el) {

            getRef.style.background = 'gold';
        }
        else {
            getRef.style.background = 'forestgreen';

        }

    }
    else if (el == 1) {
        if (randomNum == el) {

            getRef.style.background = 'forestgreen';
        }
        else {
            getRef.style.background = 'gold';

        }

    }
    console.log('element', el);
    console.log('random number', randomNum);
}


var die = document.getElementById('die-coin');
var msg = document.getElementById('msg');
function coinRoll(selectedCoin) {

    var generateRandomNum = Math.floor(Math.random() * 2 + 1);
    // console.log(generateRandomNum)
    if (generateRandomNum == 1) {
        die.innerHTML = '<img src="img/head.jpg" alt="head" width="100px" height="100px">';
        if (selectedCoin == generateRandomNum) {
            msg.innerHTML = 'you won the toss';
            msg.style.display = 'inline-block';
        }
        else {
            msg.innerHTML = 'you lost the toss';
            msg.style.display = 'inline-block';


        }
    }
    else if (generateRandomNum == 2) {
        die.innerHTML = '<img src="img/tail.jpg" alt="tail"  width="100px" height="100px">';
        if (selectedCoin == generateRandomNum) {
            msg.innerHTML = 'you won the toss';
            msg.style.display = 'inline-block';

        }
        else {
            msg.innerHTML = 'you lost the toss';
            msg.style.display = 'inline-block';

        }
    }
}