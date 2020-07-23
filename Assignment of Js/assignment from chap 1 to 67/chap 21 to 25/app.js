

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













