

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

var arr = ['keyboard', 'mouse', 'printer', 'monitor'];
console.log(arr.length)
for (var i = 0; i <4; i++) {
    var out = arr.pop();
    alert(out);
}