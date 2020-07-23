

// **************** Assignment # 12-13 ******************

//1


//2

// var num1=+prompt('Enter first number');
// var num2=+prompt('Enter second number');

// if(num1>num2){
//     alert('Large number is '+num1);
// }
// else if(num2>num1){
//     alert('Large number is '+num2);
// }
// else if(num2===num1){
//     alert('Both numbers are equal '+num1+' = '+num2);
// }



//3

// var num=+prompt('Enter first number');
// if(num>0){
//     alert('The number is positive \n'+num);
// }
// else if(num<0){
//     alert('The number is negative \n'+num);
// }
// else if(num===0){
//     alert('The number is zero \n'+num);
// }



//4
// var character=prompt('Enter a character');
// var vowel=['a','e','i','o','u'];
// var flag=false;
// for(var i=0;i<=4;i++){
//     if(character==vowel[i]){
//         alert('true');
//         flag=true;
//     }

// }
// if(flag==false){
//     alert('false');

// }



//5

// var character=prompt('Enter a character');
// if(isNaN(character)==true){
//     alert('input is string')
//     if(character==character.toLowerCase()){
//         alert('input is lower case');
//     }
//     else{
//         alert('input is Upper case');

//     }
// }

// else{
//     alert('input is number')

// }



//6

// var pswd1=prompt('Enter your password');
// var preSetpswd='123';

// if(pswd1=='')
// {
//     alert(' Please enter your password”')
// }
// else if(pswd1==preSetpswd){
//     alert(' Correct! The password you entered matches the original password ')

// }
// else{
//     alert('wrong password');
// }




//7

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)

// }




//8

// var time=+prompt('Enter any hour in 24 hours formate ');

// if(time>=0 && time<12){
//     alert('Good morning!');
// }
// else if(time>=12 && time<17){
//     alert('Good afternoon!');

// }
// else if(time>=17 && time<21){
//     alert('Good evening!');

// }
// else if(time>=21 && time<=24){
//     alert('Good night!');

// }