

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























