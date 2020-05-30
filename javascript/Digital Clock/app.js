

var hourRef=document.getElementById('hour');
var mintRef=document.getElementById('mint');
var secRef=document.getElementById('sec');

var hour=0;
var mint=0;
var sec=0;

function digitalClock(){

    hourRef.innerHTML=hour;    
    mintRef.innerHTML=" : "+ mint;    
    secRef.innerHTML=" : "+ sec++;   
    
    if(sec>59){
        sec=0;
        mintRef.innerHTML=mint++;
        if(mint>59){
            mint=0;
            hourRef.innerHTML=hour++;
            if(hour>24){
                clearInterval(setInterval);
            }
        }
    }

}

var timer=setInterval(digitalClock,1000)
