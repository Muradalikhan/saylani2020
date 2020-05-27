
var getDisplay=document.getElementById("display");

var expression;
function getNum(num){
    getDisplay.innerHTML +=num;
    expression=getDisplay.innerHTML;

}


function result(){
    var r=eval(expression);
    getDisplay.innerHTML=r
    console.log(r);
}

function clearDisplay(){
    getDisplay.innerHTML="";
    console.log("i am clicked")
}