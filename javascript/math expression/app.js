var generateExp=document.getElementById('generate-exp');
var expectedAns=document.getElementById('expected-answer');
var yourAns=document.getElementById('your-answer');
var correctAns=document.getElementById('correct-answer');
var showMsg=document.getElementById('show-msg');
var divRef=document.getElementById('result-div');
var result;

function generateExpression(){
    var num1=Math.floor(Math.random()*6+1);
    var num2=Math.floor(Math.random()*6+1);
    var num3=Math.floor(Math.random()*6+1);
    var num4=Math.floor(Math.random()*6+1);
    var num5=Math.floor(Math.random()*6+1);
   
    var arrangeOrder=Math.floor(Math.random()*4+1);

    if(arrangeOrder==1){
        var createExp=num1+'/'+num2+'*'+num3+'-'+num4+'+'+num5;
    }
    else if(arrangeOrder==2){
        var createExp=num1+'*'+num2+'/'+num5+'-'+num3+'+'+num4;
    }
    else if(arrangeOrder==3){
        var createExp=num1+'*'+num2+'-'+num5+'/'+num3+'+'+num4;
    }
    else if(arrangeOrder==4){
        var createExp=num1+'+'+num2+'-'+num5+'*'+num3+'/'+num4;
    }

    generateExp.innerHTML=createExp;//generate expression and show in Dom
    
    result=eval(createExp).toFixed(2);
    console.log(result)
     
}


function checkAns(){
    var userInput=expectedAns.value;
    yourAns.innerHTML=userInput;
    correctAns.innerHTML=result;

    if(userInput==result){
        showMsg.innerHTML='Congratulation! Your answer is correct';
        showMsg.style.background='green';
        showMsg.style.color='white';
    }
    else{
        showMsg.innerHTML='Sorry! Your answer is wrong';
        showMsg.style.background='red';
        showMsg.style.color='white';
    }
    divRef.style.display='block';
}