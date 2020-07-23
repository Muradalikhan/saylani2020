


// *********************************** Assignment 38 to 42  ***********************************

// 1) a raised to b

// var a=+prompt('Enter value of a');
// var b=+prompt('Enter value of b');

// function power(a,b){
//    var result= Math.pow(a,b)
//    console.log(result)
// }
// power(a,b);




// 2) Leap year
// var userInput=+prompt('Enter any year');

// function leapYear(){
//     if(userInput%4==0){
//         console.log(userInput+' is a leap year')
//     }else{
//         console.log(userInput+' is not a leap year')

//     }
// }
// leapYear();




// 3) area of triangle

// var a = +prompt('enter value of a');
// var b = +prompt('enter value of b');
// var c = +prompt('enter value of c');

// function sOfTriangle(a, b, c) {
//     var r = (a + b + c) / 2;
//     return r;

// }

// function areaOfTriangle(a,b,c) {

//     var s=sOfTriangle(a,b,c);
//     var area = s*((s - a)*(s - b)*(s - c));
//     console.log(area)

// }

// areaOfTriangle(a,b,c);





// 4) average and percentage

// var sub1 = +prompt('enter marks of sub1');
// var sub2 = +prompt('enter marks of sub2');
// var sub3 = +prompt('enter marks of sub3');

// function mainFunc(){
//     var ave=average();
//     var per=percentage();
//     console.log('average marks : '+ave)
//     console.log('percentage is : '+per+'%')
// }
// mainFunc();

// function average(){
//     var averageMarks=(sub1+sub2+sub3)/3;
//     return averageMarks;
// }

// function percentage(){
//     var p=(sub1+sub2+sub3)*100/300;
//     return p;
// }






// 5) indexOf custom function

// var userInput=prompt('Enter any letter from a-z');
// var str='abcdefghijklmnopqrstuvwxyz';

// function findIndex(){
//     for(var i=0; i<str.length; i++){
//         if(userInput==str[i]){
//             console.log(str[i]+' is at index '+i)
//         }

//     }
// }

// findIndex();






// 6) Delete vowel from a sentence

// var sentence='I am a boy';

// function deleteVowel(){
//     // for(var i=0; i<sentence.length;i++){
//     // }
//     var r=sentence = sentence.replace(/[aeiou]/ig,'');
//     console.log(r)
// }
// deleteVowel();







//7)  count vowel


// var str='Pleases read this application and give me gratuity';

// function countVowel(){
//         var m = str.match(/[aeiou]/gi);
//          m === null ? 0 : m.length;
//          console.log(m.length)

// }   
// countVowel();






//8 unit conversion

// var d = +prompt('enter a value');

// function dInMeter() {
//     var dis = d / 1000;
//     console.log(dis+' meter');
// }

// function dInFeet() {
//     var dis = d * 3281;
//     console.log(dis+' feet');
// }

// function dInInch() {
//     var dis = d * 39370;
//     console.log(dis+' inch');
// }

// function dInCentimeter() {
//     var dis = d * 100000;
//     console.log(dis+' cm');
// }
// dInMeter();
// dInFeet();
// dInInch();
// dInCentimeter();






// 9) overtime payment of employee

// var workedHour=+prompt('Enter your worked hours');
// function payment(){
//     var pay=workedHour*12;
//     console.log(pay);
// }





// 10) small ATM function

var cash=+prompt('Enter your amount to withdraw');
    
console.log(Math.floor(cash/100)+' hundered' );
cash%100;
console.log(Math.floor(cash%100/50)+ ' fifty');
console.log(cash%100%50/10 +' ten' );