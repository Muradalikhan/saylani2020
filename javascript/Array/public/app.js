
// create empty array 
// var arry = [];
// console.log(arry);
// // add element in Array
// arry.push(1, 2, 3);
// console.log(arry);
// // add element in last of Array
// arry.push("1", "2", "3");
// console.log(arry);
// // delete last element from Array
// arry.pop();
// console.log(arry);
// // add element in start of array 
// arry.unshift("Murad");
// console.log(arry);
// // delete first element of array
// arry.shift();
// console.log(arry);
// // add and delete at your desire position
// arry.splice(2, 0, 58, 59, 60);
// console.log(arry);
// // array length
// console.log(arry.length);
// // copy of array
// console.log(arry.slice(2, 5))







// small task using for loop and array
// var cityToCheck=prompt("Enter your city name");
// var cleanestCityName=["Karachi","Lahore","Islamabad","multan","rawalpindi"];

// for(i=0;i<cleanestCityName.length;i++){
//     if(cityToCheck===cleanestCityName[i]){
//         alert("your city "+cleanestCityName[i] +" is the cleanest city ");
//     }
// }






//flag
var cityToCheck = prompt("Enter your city name");
firstChar = cityToCheck.slice(0, 1)    // converting user input into camel case
firstChar = firstChar.toUpperCase();
otherChar = cityToCheck.slice(1);
cityToCheck = firstChar + otherChar;

var cleanestCityName = ["Karachi", "Lahore", "Islamabad", "Multan", "Rawalpindi"];
var matchFound = "no";  // this is flag variable
for (i = 0; i < cleanestCityName.length; i++) {
    if (cityToCheck === cleanestCityName[i]) {
        matchFound = "yes";  // if condition match then change value of flag
        alert("your city " + cleanestCityName[i] + " is the cleanest city ");
    }
}
if (matchFound === "no") {
    alert("your city is not the cleanest city ");
}





//Boolean
// var cityToCheck=prompt("Enter your city name");
// var cleanestCityName=["Karachi","Lahore","Islamabad","multan","rawalpindi"];
// var matchFound=false;  // this is boolean variable
// for(i=0;i<cleanestCityName.length;i++){
//     if(cityToCheck===cleanestCityName[i]){
//         matchFound=true  // if condition match then change value of boolean
//         alert("your city "+cleanestCityName[i] +" is the cleanest city ");
//     }
// }
// if(matchFound===false){
//     alert("your city is not the cleanest city ");
// }





//Nested loop
// var firstName=["Murad","Awais","Waqas","Junaid"];
// var lastName=[' Ali',' Khan',' Shah',' Jadoon'];
// var fullNames=[];
// for(var i=0;i<4;i++){
//     for(var j=0;j<4;j++){
//         fullNames.push(firstName[i] + lastName[j])
//     } 
// }
// console.log(fullNames)





//printing A - Z & a - z

// var prtAlphabet = document.getElementById("result");
// function printabc(option) {
//     var a = 65;
//     var z = 91;
//     if (option == "small") {
//         a = 97;
//         z = 123;
//     }
//     prtAlphabet.innerHTML = " ";// empty div first if found any text
//     for (var i = a; i < z; i++) {
//         // console.log(i);
//         var str = String.fromCharCode(i); // chnaging code into Alphabet
//         prtAlphabet.innerHTML += " " + str;
//     }
// }

// // Convert to Upper case
// function capitalabc() {
//     if (prtAlphabet.innerHTML == "") {
//         alert("please write some text first");
//         console.log("helo");
//     }
//     var cap = prtAlphabet.innerHTML.toUpperCase();
//     prtAlphabet.innerHTML = " ";
//     prtAlphabet.innerHTML = cap;
// }
// // Convert to Smaller case
// function smallabc() {
//     if (prtAlphabet.innerHTML == "") {
//         alert("please write some text first");
//         console.log("helo");
//     }
//     var cap = prtAlphabet.innerHTML.toLowerCase();
//     prtAlphabet.innerHTML = " ";
//     prtAlphabet.innerHTML = cap;
// }


