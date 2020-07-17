


// ********************** Assignment 49 to 52 ********************************

// 1)



var _name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');

var u_name = document.getElementById('uname');
var u_email = document.getElementById('uemail');
var u_password = document.getElementById('upassword');
var std;
function gotoUserData() {
    std = {
        name: _name.value,
        email: email.value,
        password: password.value
    }

    var myobj = JSON.stringify(std);
    localStorage.setItem('student', myobj);
    window.location.href = 'user.html'





}


function showData() {
    var getData = localStorage.getItem('student')
    var getObj = JSON.parse(getData);

    u_name.innerHTML = getObj.name;
    u_email.innerHTML = getObj.email;
    u_password.innerHTML = getObj.password

    // console.log(u_name)
}

var lessPara=document.getElementById('less');
var morePara=document.getElementById('more');
function detail(){
    lessPara.style.display='none';
    morePara.style.display='inline-block';
}

function showless(){
    lessPara.style.display='inline-block';
    morePara.style.display='none';
}



