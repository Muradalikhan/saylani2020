
// ******************** Assignment 1 to 3 ********************
//----Alert-------

// alert('Welcome to our website');

// alert('Error! please enter a valid password');

// alert(`welcome to JS Land...\nHappy Coding!`);




// Assignment #2
//----VARIABLES FOR STRINGS -------

// //1
// var username;

// //2
// var myName='Murad Ali'

// //3
// var message;
//     message='Hello World';
//     alert(message);

//4
// var stdName='Jhone Doe';
// var stdAge='15 years old';
// var stdCourse='Certified Mobile application development';;
//     alert(stdName);
//     alert(stdAge);
//     alert(stdCourse);

//5
// var a='PIZZA';
// var strLength=a.length;
// for (i=0;i<strLength;i++)
// alert(a+'\n'+a.slice(0,4)+'\n'+a.slice(0,3)+'\n'+a.slice(0,2)+'\n'+a.slice(0,1))

//6
// var email='murad@gmail.com';
// alert('my email address is '+email);

//7
// var book='a smarter way to learn javascript';
// alert(book);

//8
// var elRef=document.getElementById('content-disply-byjavascript');
// elRef.innerHTML='Yah! I can write html content through javascript';

//9
// var str='▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬';
// alert(str);




// Assignment #3
//----VARIABLES FOR NUMBERS -------

//1
// var age=15;
// alert('I am '+age+ ' years old');

//2

// function checkCookie() {
//     var username = getCookie("username");
//     if (username != "") {
//      alert("Welcome again " + username);
//     } else {
//       username = prompt("Please enter your name:", "");
//       if (username != "" && username != null) {
//         setCookie("username", username, 365);
//       }
//     }
//   }

//   console.log(checkCookie());


//3
// var birthYear='1995';
// var elRef=document.getElementById('my-birth-year');
//     elRef.innerHTML='My birth year is '+birthYear+ '<br/> data type of my declared variable is number'


//4
// var VisitorName = prompt('Please enter your name');
// var firstLetter = VisitorName.slice(0, 1).toLocaleUpperCase();
// var otherLetters = VisitorName.slice(1);
// VisitorName = firstLetter + otherLetters;
// var EnterQuantity = prompt('Please enter quantity of product');
// var productTitle = prompt('Please enter product Title you want to buy');
// var visitorData = {
//     name: VisitorName,
//     quantity: EnterQuantity,
//     product: productTitle
// }

// var elRef = document.getElementById('visitor-data');
// elRef.innerHTML = visitorData.name + ' ordered ' + visitorData.quantity + ' of ' +visitorData.product;




// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------








// ********************** Asignment #4 ******************************

//1
// var name,age,gender;


//2

// Legal
// var name;
// var $name;
// var _name;
// var name1;
// var name_1;

// Illegal
// var user name;
// var 1name;
// var console;
// var #name;
// var user-name;



//3

// document.write("<h1>Rules for naming JS variables</h1><br/>")
// document.write("<p>Variable names can only contain number, doller,under score and letter.</p> For example $my_1stVariable<br/>")
// document.write("<p>Variables must begin with a  letter, doller or under score </p> For example $name, _name or name<br/>")
// document.write("<p> Variable names are case sensitive</p><br/>")
// document.write("<p>  Variable names should not be JS keyword </p><br/>")






//******************************Assignment #5******************************

//1

// var a = +prompt("Enter first number");
// var b = +prompt("Enter Second number");
// var c = a + b;

// document.write('Sum of ' + a + ' and ' + b + ' is ' + c)


//2

//***subtraction***** 

// var a = +prompt("Enter first number");
// var b = +prompt("Enter Second number");
// var c = a - b;
// document.write('Subtraction of ' + a + ' and ' + b + ' is ' + c)

//***Multiplication***** 

// var a = +prompt("Enter first number");
// var b = +prompt("Enter Second number");
// var c = a * b;
// document.write('Multiplication of ' + a + ' and ' + b + ' is ' + c)

//***Division***** 

// var a = +prompt("Enter first number");
// var b = +prompt("Enter Second number");
// var c = a / b;
// document.write('Division of ' + a + ' and ' + b + ' is ' + c)

//***Modulus***** 

// var a = +prompt("Enter first number");
// var b = +prompt("Enter Second number");
// var c = a % b;
// document.write('Modulus of ' + a + ' and ' + b + ' is ' + c)



//3

// var number;
// document.write('value of variable is : ' + number + '<br>');

// var number = 5;
// document.write('intial value is : ' + number + '<br>');

// number++;
// document.write('value after increament is : ' + number + '<br>');

// number= number +7;
// document.write('value after addition is : ' + number + '<br>');

// number--;
// document.write('value after decreament is : ' + number + '<br>');

// number= number%3;
// document.write('The remainder  is : ' + number + '<br>');






//4

// var costOfOneTicket=600;
// var costOfFiveTicket=costOfOneTicket*5;
// document.write('Total Cost to buy 5 Ticket to a movie is '+costOfFiveTicket);



//5

// var getRef = document.getElementById('table');
// var userInput = +prompt('Enter a number for viewing Table of \nfor Example 2');
// for (var i = 1; i <= 10; i++) {
//     getRef.innerHTML += userInput + ' x ' + i + ' = ' + i * userInput + '<br>';
// }




//6
//Converting temperature

// celcuis to farhenight
// var c=25;
// var f=(c*9/5)+32;
// document.write(c+'C\u00B0 is '+f+'F\u00B0' )
//farhenight to celsius
// var f=70;
// var c=(f-32)*5/9;
// document.write(f+'F\u00B0 is '+c+'C\u00B0' )




//7
//shopping Cart

// var PriceOfItem1 = 650;
// var PriceOfItem2 = 100;
// var quantityOfItem1 = 3;
// var quantityOfItem2 = 7;
// var shippingCharges = 100;
// var totalCharges=PriceOfItem1*quantityOfItem1+PriceOfItem2*quantityOfItem2+shippingCharges;

// document.write('<h1>Shopping Cart</h1><br/><br/>');
// document.write('Price of item 1 is '+PriceOfItem1 +'<br/>');
// document.write('Quantity of item 1 is'+quantityOfItem1 +'<br/>');
// document.write('Price of item 2 is '+PriceOfItem2 +'<br/>');
// document.write('Quantity of item 2 is'+quantityOfItem2 +'<br/>');
// document.write('Shipping charges'+shippingCharges +'<br/><br/>');
// document.write('Total cost of your order is '+totalCharges +'<br/>');





//8
//Marks Sheet

// var totalMarks=980;
// var obtainedMarks=804;
// var percentage=obtainedMarks*100/totalMarks;

// document.write('totalMarks = '+totalMarks+'<br/>');
// document.write('obtainedMarks = '+obtainedMarks+'<br/>');
// document.write('percentage = '+percentage+'%');





//9
//Currency Exchange

// var $us_1=104.80;
// var $us_10=104.80*10;
// var saudiRiyal_1=28;
// var saudiRiyal_25=28*25;
// var totalPakistaniCurrency=$us_10+saudiRiyal_25;
// document.write('<h1>Currency in PKR</h1><br>')
// document.write('Total currency in PKR: '+totalPakistaniCurrency)





//10
//arthmetic expression

// var number=4;
// var exp=number+5*10/2;
// console.log(exp);



//11
//Age calculator

// var currentYear = 2020;
// var birthYear = 1995;
// var age = currentYear - birthYear;
// var possibleAge=age-1;

// document.write('current Year: ' + currentYear + '<br>');
// document.write('birth Year: ' + birthYear + '<br>');
// document.write('Your age is either : ' + age + ' or ' + possibleAge + '<br>');




//12
//The Geometrizer

// var radius=20;
// var pie=3.142;
// var circumference=2*pie*radius;
// var area=pie*(radius*radius);

// document.write('Radius of a circle is : '+radius+'<br>');
// document.write('Circumference of a circle is : '+circumference+'<br>');
// document.write('Area of a circle is : '+area+'<br>');




//13
//The Lifetime Supply Calculator

// var favSnack='Chocolate chip';
// var currentAge=25;
// var maxAge=65;
// var AmountOFSnackPerDay=3;
// var totalWillEat=maxAge-currentAge;
//     totalWillEat=totalWillEat*3;

// document.write('Favourite snake : '+favSnack+'<br>');
// document.write('Current Age : '+currentAge+'<br>');
// document.write('Maximum Age : '+maxAge+'<br>');
// document.write('Amount OF Snack Per Day : '+AmountOFSnackPerDay+'<br>');
// document.write('Total snake you will eat  : '+totalWillEat+'<br>');



// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------


















// *******************Assignment #6 to 9*******************



//1

// var a=10;

// document.write('Result <br>');
// document.write('The value of a is : '+a+'<br>');
// document.write('...............................<br>');
// document.write('The value of ++a is : '+ ++a +'<br>');
// document.write('Now the value of a is : '+ a +'<br><br>');
// document.write('The value of a++ is : '+ a++ +'<br>');
// document.write('Now The value of a++ is : '+ a +'<br><br>');
// document.write('The value of --a is : '+ --a +'<br>');
// document.write('The value of a is : '+ a +'<br><br>');
// document.write('The value of a-- is : '+ a-- +'<br>');
// document.write('Now The value of a is : '+ a +'<br>');




//2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write('a is : ' + a + '<br>');
// document.write('b is : ' + b + '<br>');
// document.write('result is : ' + result + '<br>');



//3

// var userInput=prompt('Enter your name please');
// document.write('Welocme : ' + userInput + '<br>');


//5

// var getRef = document.getElementById('table');
// var userInput = +prompt('Enter a number please');
// if (userInput !== '') {
//     for (var i = 1; 1 < 11; i++) {

//         getRef.innerHTML += userInput + ' x ' + i + ' = ' + i * userInput;
//     }
// }
// else {
//     getRef.innerHTML += 5 + ' x ' + i + ' = ' + i * 5;

// }




//6
// ***************************making your marksheet ***************************

// var subj_1=prompt('Enter name of first subject');
// var subj_2=prompt('Enter name of second subject');
// var subj_3=prompt('Enter name of third subject');
// var subj_1_marks=+prompt('Enter obtained marks of first subject');
// var subj_2_marks=+prompt('Enter obtained marks of second subject');
// var subj_3_marks=+prompt('Enter obtained marks of third subject');
// var total_marks_each_sub=100;
// var total_marks_all_sub=300;
// var total_obtainMarks=subj_1_marks+subj_2_marks+subj_3_marks;
// var per_subj1=subj_1_marks*100/100;
// var per_subj2=subj_2_marks*100/100;
// var per_subj3=subj_3_marks*100/100;
// var total_per=total_obtainMarks*100/300;
// console.log(total_obtainMarks,total_per)


// var subj_1_Ref=document.getElementById('subj-1');
// var subj_2_Ref=document.getElementById('subj-2');
// var subj_3_Ref=document.getElementById('subj-3');
// var marksPerSubject_Ref=document.getElementsByClassName('marks');
// var obt_marks_1_Ref=document.getElementById('obt-marks-1');
// var obt_marks_2_Ref=document.getElementById('obt-marks-2');
// var obt_marks_3_Ref=document.getElementById('obt-marks-3');
// var per_1_Ref=document.getElementById('percentage-1');
// var per_2_Ref=document.getElementById('percentage-2');
// var per_3_Ref=document.getElementById('percentage-3');
// var total_marks_Ref=document.getElementById('Total-marks');
// var total_obt_marks_Ref=document.getElementById('Total-obt-marks');
// var total_per_Ref=document.getElementById('total-percentage');


// subj_1_Ref.innerHTML=subj_1;
// subj_2_Ref.innerHTML=subj_2;
// subj_3_Ref.innerHTML=subj_3;
// marksPerSubject_Ref[0].innerHTML='100';
// marksPerSubject_Ref[1].innerHTML='100';
// marksPerSubject_Ref[2].innerHTML='100';
// obt_marks_1_Ref.innerHTML=subj_1_marks;
// obt_marks_2_Ref.innerHTML=subj_2_marks;
// obt_marks_3_Ref.innerHTML=subj_3_marks;
// per_1_Ref.innerHTML=per_subj1+'%';
// per_2_Ref.innerHTML=per_subj2+'%';
// per_3_Ref.innerHTML=per_subj3+'%';
// total_marks_Ref.innerHTML=300;
// total_obt_marks_Ref.innerHTML=total_obtainMarks;
// total_per_Ref.innerHTML=total_per+'%';




// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------




// *********************** Assignment 9 - 11 ***********************

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
// var number1=+prompt("Enter  first number");
// var number2=+prompt("Enter second number");
// var op=prompt("Enter a operator (*,/,+,-,%)");
// if(op=='*'){
//     var result=number1*number2;
//     alert("your answer is : "+result)
// }
// else if(op=='/'){
//     var result=number1/number2;
//     alert("your answer is : "+result)
// }
// else if(op=='+'){
//     var result=number1+number2;
//     alert("your answer is : "+result)
// }
// else if(op=='-'){
//     var result=number1-number2;
//     alert("your answer is : "+result)
// }
// else if(op=='%'){
//     var result=number1%number2;
//     alert("your answer is : "+result)
// }
// else{
//     alert("you entered wrong operator please check")
// }







// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------












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





// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------






// **************** Assignment # 14-16 ******************

//1

// var arry=[];

//2

// var arry=[{},{},{}]

//3

// var arry=['a','e','i'];

//4

// var arry=[1,2,3,4,5];

//5

// var arry=[true,false];

//6

// var arry=[true,false,'a','e','i',1,2,3,4,5];

//7

// var availEducation=['HSC','SSC','BCS','BS','B.COM','MS','M. Phil','PhD'];
// for(var i=0; i<availEducation.length;i++)
// document.write(i+' ) '+availEducation[i]+'<br>');



//8

// var stdNames=['Michal','John','Tony'];
// var stdScore=[320,230,480];
// var totalScore=500;
// var percentage;

// for(var i=0;i<stdScore.length;i++){
//     percentage=stdScore[i]*100/500;
//     document.write('Score of '+stdNames[i]+' is '+stdScore[i]+' .Percentage : '+percentage+'% <br>');
// }




//9

// var colorArry=['Green','Yellow','Blue','Red'];
//     document.write(colorArry+'<br>')

// var addColorAtBeggining=prompt('Enter any color name');
//     colorArry.unshift(addColorAtBeggining);
//     document.write(colorArry+'<br>')

// var add1=prompt('Enter one color ');
// var add2=prompt('Enter second color ');
// colorArry.unshift(add1,add2);
// document.write(colorArry+'<br>')

// colorArry.shift();
// document.write(colorArry+'<br>')
// colorArry.pop();
// document.write(colorArry+'<br>')

// var indexNum=prompt('Enter an index number to insert color ');
// var colorToAdd=prompt('Enter any color name to add ');

//     colorArry.splice(indexNum,0,colorToAdd);
//     document.write(colorArry+'<br>')

// var start=prompt(' delete from  ');
// var numberOfDelete=prompt(' delete to ');

//     colorArry.splice(start,numberOfDelete);
//     document.write(colorArry+'<br>')





//10

// var score = [320, 230, 480, 120];
// document.write('score of students : ' + score + '<br>')

// score.sort();
// document.write('Ordered score of students : ' + score + '<br>')



//11


// var cities = ['Karachi','Lahore','Islamabad','Queta','Peshawar'];
// document.write('Cities list :  <br>')
// document.write(cities+'<br>');

// var selectedCities=cities.slice(0,2)
// document.write('Selected cities list :  <br>')
// document.write(selectedCities);



//12

// var arr = ['This', 'is', 'my', 'cat'];
// var separator = ' ';
// var arry = arr.join();
// var strg = arr.join(separator);
// console.log(arr);
// document.write('Array :  <br>')
// document.write(arry + '<br>');
// document.write('String :  <br>')
// document.write(strg + '<br>');





//13

// var arr = ['keyboard', 'mouse', 'printer', 'monitor'];
// console.log(arr.length)
// for (var i = 0; i <4; i++) {
//     var out = arr.shift();
//     alert(out);
// }




//14

// var arr = ['keyboard', 'mouse', 'printer', 'monitor'];
// console.log(arr.length)
// for (var i = 0; i <4; i++) {
//     var out = arr.pop();
//     alert(out);
// }





// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------




// **************** Assignment # 17-20 ******************

//1

// var arr = [[], [], []]

//2

// var arr = [
//     [0,1,2,3], 
//     [1,0,1,2], 
//     [2,1,0,1]
// ]

//3
//printing numeric from 1 to 10
// for(var i=1;i<=10;i++){
//     console.log(i);
// }


//4
//print multiplication table of user desired
// var tableOf = +prompt('Enter number for table to print');
// var lengthOfTable = +prompt('Enter a number for length of table');

// for (var i = 1; i <= lengthOfTable; i++) {
//     var product=tableOf*i;
//     document.write(tableOf+' x '+ i+' = '+product+'<br>');
// }



//5
//print items of following array
// var fruits=['apple','banana','mango','orange','strawberry'];

// for (var i = 1; i <= fruits.length; i++) {
//     document.write(' Element at index '+ i+' is '+fruits[i]+'<br>');
// }



//6
//counting
// for (var i = 1; i <= 15; i++) {
//     document.write( i+', ');
// }

//reverse counting
// for (var i = 10; i >= 1; i++) {
//     document.write( i+', ');
// }

//even number
// for (var i = 0; i <=20; i++) {
//     if(i%2==0){

//         document.write( i+', ');
//     }
// }

//odd number
// for (var i = 0; i <=20; i++) {
//     if(i%2!==0){

//         document.write( i+', ');
//     }
// }


//series
// for (var i = 1; i <=20; i++) {
//     if(i%2==0){

//         document.write( i+'k, ');
//     }
// }


//7
//search item in a bakery
// var fruits = ['cake', 'apple pie', 'cookie', 'orange', 'strawberry'];
// var userSearch = prompt('What do you want to search in our backery');

// for (var i = 0; i <= fruits.length; i++) {
//     if (userSearch == fruits[i]) {

//         document.write(fruits[i] + ' Element is at <b>index </b>' + i + ' in our bakery <br>');
//     }
//     else {
//         document.write(' Sorry ' + userSearch + ' is not availible in our bakery <br>');
//         break;
//     }

// }



//8
//finding largest number
// var arr = [24, 53, 78, 91, 12];
// var largestNumber=Math.max.apply(null,arr);
// console.log(largestNumber)


//9
// //finding smallest number
// var arr = [24, 53, 78, 91, 12];
// var largestNumber=Math.min.apply(null,arr);
// console.log(largestNumber)


//10

// for(var i=1;i<=100;i++){
//     if(i%5==0){
//         document.write(i+'<br>');
//     }
// }




// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

