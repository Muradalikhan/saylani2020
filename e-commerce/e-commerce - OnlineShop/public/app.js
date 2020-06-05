

var userName=document.getElementById('name');
var userEmail=document.getElementById('email');
var userPassword=document.getElementById('pwd');
var currentUser=document.getElementById('current-user');

// function signin(){
//     checkValidUser=localStorage.getItem('student');

//     if(checkValidUser==null){
//         alert('no user find please sign up first');
//         window.location.href='signup.html'
//     }
//     else{
//         var myobj=JSON.parse(checkValidUser);
//         if(myobj.email==userEmail.value && myobj.password==userPassword.value){
//             alert('Login successful');
//         }
//         else{
//             alert('email or password is wrong');
//         }
//     }
// }




//create user
function signup(){
    var std={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    
    var myobj=JSON.stringify(std) ;
    localStorage.setItem('student',myobj);
    alert('Account created successfully')
    window.location.href='index.html';
    

    // userName.value='';
    // userEmail.value='';
    // userPassword.value='';
}

var checkUser=localStorage.getItem('student');
checkUser=JSON.parse(checkUser);
if(checkUser!=null){
    currentUser.innerHTML=checkUser.name;
}
else{
    currentUser.innerHTML='Account';
}
