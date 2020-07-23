

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

