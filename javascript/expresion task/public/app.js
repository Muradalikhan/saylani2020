var qeustionRef= document.getElementById('ques');
var ResultRef= document.getElementById('result');
var inputFieldRef= document.getElementById('inputField');
var r;
var userinput;
function expression(){

    var n1=Math.ceil(Math.random()*9);
    var n2=Math.ceil(Math.random()*9);
    var n3=Math.ceil(Math.random()*9);
    var n4=Math.ceil(Math.random()*9);
    var op=Math.ceil(Math.random()*3);
    if(op===1)
    {
        qeustionRef.innerHTML=n1+' + '+n2+' * '+n3+' / '+n4;
        r=n1+n2*n3/n4;
        console.log(r);
        
    }
    else if(op===2)
    {
        qeustionRef.innerHTML=n1+' * '+n2+' + '+n3+' / '+n4;
        r=n1*n2+n3/n4;
        console.log(r);
    }
    else if(op===3)
    {
        qeustionRef.innerHTML=n1+' + '+n2+' /'+n3+' * '+n4;
        r=n1+n2/n3*n4;
        console.log(r);
    }


    ResultRef.innerHTML='';
    inputFieldRef.value='';
}

function checkibility(){

    userinput=inputFieldRef.value;
    userinput=Number(inputFieldRef.value);
    if(userinput===r){
        ResultRef.innerHTML='correct answer';
    }else
    {
        ResultRef.innerHTML='your answer is wrong Correct answer is '+ r;
    }
}