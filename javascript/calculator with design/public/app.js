
var getDisplay=document.getElementById("display");

var expression;
function getNum(num){
    getDisplay.innerHTML +=num; // show clicked button in display screen
    expression=getDisplay.innerHTML; // store expression

}


function result(){
    var r=eval(expression); // calculate whole expression 
    getDisplay.innerHTML=r  // display result
    // console.log(r);
}

function clearDisplay(){
    getDisplay.innerHTML="";
    // console.log("i am clicked")
}

function root(){
    var r=Math.sqrt(expression); // root of given number
    getDisplay.innerHTML=r  // display result
    

}
function square(){
    var r=expression*expression; // root of given number
    getDisplay.innerHTML=r  // display result
    

}