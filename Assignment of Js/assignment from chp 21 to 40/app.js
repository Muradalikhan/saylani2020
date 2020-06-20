



// *************** Assignment 21 to 25 *********************

//1

// var firstName=prompt('Enter your first name');
// var lastName=prompt('Enter your last name');
// var fullName=firstName+' '+lastName;
// alert('Welcome to '+fullName);


//2

// var userInput=prompt('Enter your favourite mobile name');
// alert('My favourite mobile is '+userInput +'\nStrength:'+userInput.length);


//3

// var str='Pakistani';
// console.log(str.indexOf('n'));


//4

// var str='Hello world';
// var lastInd=str.lastIndexOf('l');
// document.write('string:'+str+'<br>');
// document.write('Last index of L:'+lastInd+'<br>');


//5

// var str='Pakistani';
// var char=str.charAt(3);
// document.write('string:'+str+'<br>');
// document.write('char at index 3:'+char+'<br>');


//6

// var firstName=prompt('Enter your first name');
// var lastName=prompt('Enter your last name');
// alert(firstName.concat(lastName));


//7

// var city='Hayderabad';
// var updatedCity=city.replace('Hayder','Islam');
// document.write('city:'+city+'<br>');
// document.write('after replace:'+updatedCity+'<br>');


//8

// var message = 'Ali and Sami are best friends. They play cricket and football together';
// var updatedMessage=message.replace('and','&')
// document.write('Message: '+message+'<br>');
// document.write('Updated Message: '+updatedMessage+'<br>');


//9

// var str='472';
// var type1=typeof str;
// var num=parseInt(str);
// var type2=typeof num;

// document.write('value: '+str+'<br>');
// document.write('type: '+type1+'<br>');
// document.write('value: '+num+'<br>');
// document.write('type: '+type2+'<br>');




// 10

// var userInput=prompt('enter a string');
//     convertUserInput=userInput.toUpperCase();
// document.write('userInput: '+userInput+'<br>');
// document.write('capital case: '+convertUserInput+'<br>');



// 11

// var userInput = prompt('enter a string');
// firstLetter = userInput.slice(0, 1).toUpperCase();
// restOfLetter = userInput.slice(1);
// convertUserInput = firstLetter.concat(restOfLetter);
// document.write('userInput: ' + userInput + '<br>');
// document.write('capital case: ' + convertUserInput + '<br>');



//12

// var num = 35.36;
// var str = num.toString();
// result = str.replace('.', '');
// document.write('Number: ' + num + '<br>');
// document.write('Result: ' + result + '<br>');



//13

// var userInput = prompt('enter your name with special character');
//     if(userInput.includes('@')==true || userInput.includes('!')==true || userInput.includes('.')==true || userInput.includes(',')==true){

//         alert('invalid username')
//     }



//14
//username validation

// var arr = ['cake', 'apple pie', 'cookie', 'petties', 'jam'];
// var userInput = prompt('Serach for item in Bakery');
// userInput = userInput.toLowerCase();
// var searchItem = arr.includes(userInput);
// if (searchItem == true) {
//     var position = arr.indexOf(userInput)
//     document.write('This item is availible <b>at index ' + position + '</b> in our bakery')
// }
// else {
//     document.write('Sorry! This item is not availible  in our bakery')

// }




//15
//password validation

// var password = prompt('Enter your password');
// var leng = password.length;
// var startWith = password.slice(0, 1);
// var lettersAndNumber = /^[0-9a-zA-Z]+$/;

// if (leng < 6) {
//     console.log('length is invalid ')
// }
// else if (!isNaN(startWith)) {
//     console.log('number at beginning is invalid ')

// }
// else if (!password.match(lettersAndNumber)){
//     console.log('special charter are invalid ')
// }
// else{
//     console.log('password is valid')
// }



//16

// var university = "University Of Karachi";
// universityArr = university.split();
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i] + '<br>');
// }



//17

// var userInput = prompt('Enter your Country Name');

// for (var i = userInput.length-1; i < userInput.length; i++) {
//     document.write(userInput[i] );
// }


//18

// var text = 'The quick brown fox jumps over the lazy dog';
// text = text.toLowerCase();
// var count = (text.match(/the/g) || []).length;
// console.log(count)

// document.write('Text: '+text+"<br>");
// document.write('There are '+count+' occurrence of the word "the" <br>');



// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------







// ******************************** Assignment 26 to 30 ********************************

//1
//positive input

// var num=+prompt('Enter a positive number')
// var roundNumber=Math.round(num);
// var cielNumber=Math.ceil(num);
// var floorNumber=Math.floor(num);
// document.write('number: '+num+'<br>');
// document.write('round number: '+roundNumber+'<br>');
// document.write('ciel number: '+cielNumber+'<br>');
// document.write('floor Number: '+floorNumber+'<br>');


//2
//negative input

// var num=+prompt('Enter a negative number')
// var roundNumber=Math.round(num);
// var cielNumber=Math.ceil(num);
// var floorNumber=Math.floor(num);
// document.write('number: '+num+'<br>');
// document.write('round number: '+roundNumber+'<br>');
// document.write('ciel number: '+cielNumber+'<br>');
// document.write('floor Number: '+floorNumber+'<br>');


//3


//4

// var num=Math.random();
// var dice=Math.floor(num*6+1);
// document.write('Dice: '+dice+'<br>');


//5

// var num=Math.random();
// var dice=Math.floor(num*2+1);
// switch(dice){
//     case 2:
//         document.write('Dice value is '+dice+': Head<br>');
//     break;
//     case 1:
//         document.write('Dice value is '+dice+': Tail<br>');
//     break;
// }


//6

// var num=Math.random();
// var dice=Math.floor(num*100+1);
// document.write('Random number between 1 and 100 is: '+dice+'<br>');


//7

// var userWeight = prompt('Enter your weight');
// if(!userWeight.includes('kgs') && !userWeight.includes('killograms')){
//     var unit = ' killograms';
//     var addUnit = userWeight + unit;
    
//     console.log(addUnit)
// }
// else{
    
//     userWeight = userWeight.replace('kgs', ' killograms')
//     console.log(userWeight)

// }




//8

// var num=Math.random();
// var dice=Math.floor(num*10+1);
// var userGuess=prompt('Enter a number to guess secret number');
// if(dice==userGuess){

//     document.write('Congratulation!: you win a lottery <br>');
// }else{
//     document.write('Sorry!: Try again <br>');

// }





// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------











// ************************************** Assignment 31 to 34 **************************************

//1

// var currentDateAndTime=new Date();
// console.log(currentDateAndTime);


//2
// var monthName=['January','Februray','March','April','May','June','July','August','September','Octobor','November','December']
// var time=new Date();
// var getMonth=time.getMonth();
// alert('Current month: '+monthName[getMonth]);


//3
// var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// var time = new Date();
// var getDay = time.getDay();
// alert('Today is : ' + daysName[getDay]);


//4
// var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// var time = new Date();
// var getDay = time.getDay();
// if(daysName[getDay]=='Sunday' || daysName[getDay]=='Saturday'){

//     alert('It is fun day yuppppppppppppppy!' );
// }
// else{
//     alert('Busy days' );

// }


//5
// var time = new Date();
// var getDate = time.getDate();
// if(getDate<16){

//     alert('“First fifteen days of the month' );
// }
// else{
//     alert('Last days of the month' );

// }


//6
// var d = new Date();
// var millisSince = d.getTime();
// console.log(millisSince)
// var mintsSince = millisSince/1000*60;
// console.log(mintsSince)


//7
// var time = new Date();
// var getHour = time.getHours();
// if(getHour<12){

//     alert('It is AM' );
// }
// else{
//     alert('It is PM' );

// }


//8
// var d = new Date('2020-31-Dec');
// console.log(d)



//9
// var ramzanDay = new Date('2015-18-June');
// var milisRamzan = ramzanDay.getTime();
// var today = new Date();
// var milisToday = today.getTime();
// var difference = milisToday - milisRamzan;

// var totalDaysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
// console.log(totalDaysPassed)



//10
// var ramzanDay = new Date('January 1,2015');
// var milisRamzan = ramzanDay.getTime();
// var today = new Date();
// var milisToday = today.getTime();
// var difference = milisToday - milisRamzan;

// var totalSecond = Math.floor(difference / (1000 * 60 ));
// console.log(totalSecond)


// 11
// var d=new Date();
// var hour=d.getHours();
// document.write('Current Time: It is '+hour+' hours <br>');
// var oneHourAgo=hour-1;
// console.log(oneHourAgo)
// document.write('One hour ago: it was Time:'+oneHourAgo+' hours <br>');




//12

// var d=new Date();
// document.write('Today date and Time:'+d+' <br>');

// var hunderedYearsBack =d.setFullYear(d.getFullYear()-100);
// document.write('100 years back date and Time:'+d+' <br>');


//13

// var userAge = +prompt('Enter your age');
// var d = new Date();
// var year = d.getFullYear();
// var birthYear = year - userAge;
// var birthYear2 = birthYear-1 ;
// document.write('your Age is:' + userAge + ' <br>');
// document.write('your birth year is: ' + birthYear + ' or ' + birthYear2 + ' <br>');



//14
//K-Electric Bill

// var customerName = prompt('Enter your name');
// var unit = prompt('Enter your unit of this month');
// var d = new Date();
// var currentMonth = d.getMonth();
// var monthName = ['January', 'Februray', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']
// var netAmount = unit * 16;
// var LateAmount = netAmount + 350;

// document.write('<h1>K-Electric Bill</h1>  <br><br>');
// document.write('Customer Name: <b>' + customerName + '</b> <br>');
// document.write('Current Month: <b>' + monthName[currentMonth] + '</b> <br>');
// document.write('Number of Units: <b>' + unit + '</b> <br>');
// document.write('Charges per Units: <b>' + 16 + '</b> <br> <br>');
// document.write('Net Amount Payable (within Due Date): <b>' + netAmount + '</b> <br>');
// document.write('Late Payment Surcharge: <b>' + 350 + '</b> <br>');
// document.write('Gross Amount Payable (after Due Date): <b>' + LateAmount + '</b> <br>');





// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------







// ********************** Assignment 35 to 38 ******************************************


//1
// function currentDateAndTime(){
//     var d=new Date();
//     console.log(d);
// }
// currentDateAndTime();


//2
// var firstName=prompt('Enter your first name');
// var lastName=prompt('Enter your last name');
// function greetUser(){
//     alert('Welcome '+firstName+lastName)
// }
// greetUser();


//3
// var num1=+prompt('Enter your first number');
// var num2=+prompt('Enter your last number');
// function add(){
//     alert(num1+num2)
// }
// add();


//4
// var num1=+prompt('Enter your first number');
// var num2=+prompt('Enter your last number');
// var op=prompt('Enter your operator');
// var result;
// function calculate(){
//     switch (op){
//         case '*':
//         result=num1*num2;
//         alert(result)
//         break;
//         case '/':
//         result=num1/num2;
//         alert(result)
//         break;
//         case '+':
//         result=num1+num2;
//         alert(result)
//         break;
//         case '-':
//         result=num1-num2;
//         alert(result)
//         break;
//     }
// }
// calculate();


//5
// var num=+prompt('Enter a number');
// function squareOfNum(){
//     var res=num*num;
//     alert(res)
// }
// squareOfNum();


//6
// var num=+prompt('Enter a number');
// function factorialOfNum(){
//     for(var i=1;i<11;i++){
//         var res=num*i;
//         console.log(res)
//     }
// }
// factorialOfNum();


//7
// var num1=+prompt('Enter a number');
// var num2=+prompt('Enter a number');
// function printNum(){
//     for(var i=num1;i<=num2;i++){

//         console.log(i)
//     }
// }
// printNum();


//8
// var b = +prompt('Enter base of triangle');
// var p = +prompt('Enter perpendicular of triangle');
// var h;
// function calculateTriangle() {
//     function square() {
//         b = b * b;
//         p = p * p;
//         h = h * h;

//         h=b+p;
//         return h;
//     }
//     var res = square();
//     console.log(res)
// }
// calculateTriangle();



//9
// var width = +prompt('Enter width of triangle');
// var height = +prompt('Enter height of triangle');
// var answer=triangle(2,height);

// function triangle(val,variable){
//     return val*variable;
// }

// console.log(answer)


//10
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');




//11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));



//12
// function longestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// console.log(longestWord('Web Development Tutorial'));


//13
// var str = prompt('Enter a string');
// var letter = prompt('Enter a letter to find');
// var count = 0;
// function findLetter() {
//     console.log(str.split(letter).length - 1) 

// }
// findLetter();


//14
// function circleArea(radius) {
//     return (Math.PI * radius * radius).toFixed(2);
// }
// function circumference(radius) {
//     return (2 * Math.PI * radius).toFixed(2);
// }

// console.log(circleArea(3) )  ;
// console.log(circumference(3)) ;




// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

















