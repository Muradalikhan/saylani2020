

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