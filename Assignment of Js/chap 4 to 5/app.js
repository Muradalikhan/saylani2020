// Asignment #4

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






//Assignment #5

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

