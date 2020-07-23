
//Assignment 9 - 11

//1

// var userInput=prompt("Enter your city name");
// if(userInput=='karachi' || userInput=='Karachi'){
//     document.write('Welcome to the city of light')
// }




//2
// var userInput=prompt("Enter your gender i.e male/female");
// if(userInput=='male' ){
//     document.write('Good morning Sir')
// }
// if(userInput=='female' ){
//     document.write('Good morning Madam')
// }





//3
// var userInput=prompt("Enter traffic Signal color");
// if(userInput=='red'|| userInput=='Red' ){
//     document.write('Must stop')
// }
// else if(userInput=='yellow'|| userInput=='Yellow' ){
//     document.write('Ready to move')
// }
// else if(userInput=='green'|| userInput=='Green' ){
//     document.write('Move on')
// }




//4
// var userInput=prompt("Enter number of Remaining fuel in car");
// if(userInput<0.25 ){
//     document.write('Please refill the fuel in your car')
// }


//5  a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//5  b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//5  c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

//5 d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

//5  e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//5  f
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }






//6
//Marksheet with grade and remarks

// var percentage,grade,remarks;
// var obtainMarks1=+prompt('Enter your obtain number in first subject');
// var obtainMarks2=+prompt('Enter your obtain number in second subject');
// var obtainMarks3=+prompt('Enter your obtain number in third subject');
// var totalObtainMarks=obtainMarks1+obtainMarks2+obtainMarks3;
// var totalMarks=300;
//     percentage=totalObtainMarks*100/totalMarks;
//     percentage=percentage.toFixed(2);

//     if(percentage>=80){
//         grade='A-one';
//         remarks='Excellent'
//     }
//     else if(percentage>=70){
//         grade='A';
//         remarks='Good'
//     }
//     else if(percentage>=60){
//         grade='B';
//         remarks='You need to improve'
//     }
//     else if(percentage<60){
//         grade='Fail';
//         remarks='Sorry'
//     }

//     document.write('<h1>Marks sheet</h1> <br><br>')
//     document.write('Total marks : '+totalMarks+'<br>')
//     document.write('Marks obtained : '+totalObtainMarks+'<br>')
//     document.write('Percentage : '+percentage+'% <br>')
//     document.write('Grade : '+grade+' <br>')
//     document.write('Remarks : '+remarks+' <br>')



//7
//Guess game:

// var secretNumber=5;
// var userInput=+prompt("Guess the secret number from 1 to 10 number");

// if(userInput===secretNumber){
//     alert("Bingo! Correct answer")
// }
// else if(userInput===secretNumber+1 || userInput===secretNumber-1){
//     alert("“Close enough to the correct answer");
// }
// else{
//     alert("Sorry better luck next time")
// }




//8

// var userInput=+prompt("Enter a number");
// if(userInput%3===0){
//     alert("your number is divisible by 3")
// }
// else{
//     alert("your number is not divisible by 3")

// }



//9
// var userInput=+prompt("Enter a number");
// if(userInput%2===0){
//     alert("your number is Even")
// }
// else{
//     alert("your number is Odd")

// }




//10
// var userInput=+prompt("Enter a number");
// if(userInput>40){
//     alert("It is too hot outside")
// }
// else if(userInput>30){
//     alert("The Weather today is Normal")

// }
// else if(userInput>20){
//     alert("“Today’s Weather is cool")

// }
// else if(userInput>10){
//     alert("OMG! Today’s weather is so Cool.")

// }




//11
var number1=+prompt("Enter  first number");
var number2=+prompt("Enter second number");
var op=prompt("Enter a operator (*,/,+,-,%)");
if(op=='*'){
    var result=number1*number2;
    alert("your answer is : "+result)
}
else if(op=='/'){
    var result=number1/number2;
    alert("your answer is : "+result)
}
else if(op=='+'){
    var result=number1+number2;
    alert("your answer is : "+result)
}
else if(op=='-'){
    var result=number1-number2;
    alert("your answer is : "+result)
}
else if(op=='%'){
    var result=number1%number2;
    alert("your answer is : "+result)
}
else{
    alert("you entered wrong operator please check")
}





