

var userName=document.getElementById('name');
var userEmail=document.getElementById('email');
var userPassword=document.getElementById('pwd');

function signin(){
    checkValidUser=localStorage.getItem('student');

    if(checkValidUser==null){
        alert('no user find please sign up first');
        window.location.href='signup.html'
    }
    else{
        var myobj=JSON.parse(checkValidUser);
        if(myobj.email==userEmail.value && myobj.password==userPassword.value){
            alert('Login successful');
        }
        else{
            alert('email or password is wrong');
        }
    }
}


function signup(){
    var std={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    
    var myobj=JSON.stringify(std) ;
    localStorage.setItem('student',myobj);
    window.location.href='index.html';


    // userName.value='';
    // userEmail.value='';
    // userPassword.value='';
}
