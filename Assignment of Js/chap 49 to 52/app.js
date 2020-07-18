


// ********************** Assignment 49 to 52 ********************************

// task 1



var _name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');

var u_name = document.getElementById('uname');
var u_email = document.getElementById('uemail');
var u_password = document.getElementById('upassword');



function gotoUserData() {
    var std = {
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



// task 2

var lessPara = document.getElementById('less');
var morePara = document.getElementById('more');
function detail() {
    lessPara.style.display = 'none';
    morePara.style.display = 'inline-block';
}

function showless() {
    lessPara.style.display = 'inline-block';
    morePara.style.display = 'none';
}




// task 3

var std_name = document.getElementById('std-name');
var std_email = document.getElementById('std-email');
var std_age = document.getElementById('std-age');
var std_table = document.getElementById('tbl');
var generate_id = 0;

function saveRecord() {
    var std_obj = {
        name: std_name.value,
        email: std_email.value,
        age: std_age.value
    }
    generate_id++;  // increase id on click
    var tr_node = document.createElement('tr');
    tr_node.setAttribute('id', generate_id)

    var td_node1 = document.createElement('td');
    var text_node1 = document.createTextNode(std_obj.name);
    tr_node.appendChild(td_node1).appendChild(text_node1);

    var td_node2 = document.createElement('td');
    var text_node2 = document.createTextNode(std_obj.email);
    tr_node.appendChild(td_node2).appendChild(text_node2);

    var td_node3 = document.createElement('td');
    var text_node3 = document.createTextNode(std_obj.age);
    tr_node.appendChild(td_node3).appendChild(text_node3);

    //delete button
    var td_node4 = document.createElement('td');
    var btn1 = document.createElement('button');
    var btnText1 = document.createTextNode('Delete');
    btn1.setAttribute('onclick', 'deleteRow(this)')
    tr_node.appendChild(td_node4).appendChild(btn1).appendChild(btnText1);

    //edit button
    var td_node5 = document.createElement('td');
    var btn2 = document.createElement('button');
    var btnText2 = document.createTextNode('Edit');
    btn2.setAttribute('onclick', 'editRow(this)')
    tr_node.appendChild(td_node5).appendChild(btn2).appendChild(btnText2);
    std_table.appendChild(tr_node);

    //clear input field after saved record
    std_name.value='';
    std_email.value='';
    std_age.value='';

}

// delete any record on click button
function deleteRow(el) {
    el.parentNode.parentNode.remove();
}

// idies of edit form
var up_std_name = document.getElementById('edit-std-name');
var up_std_email = document.getElementById('edit-std-email');
var up_std_age = document.getElementById('edit-std-age');
var get_id;

//get selected record to show in eidt form
function editRow(el) {
    
    var c = el.parentNode.parentNode.childNodes
    up_std_name.value = c[0].innerHTML
    up_std_email.value = c[1].innerHTML
    up_std_age.value = c[2].innerHTML
    get_id = el.parentNode.parentNode.getAttribute('id');
    
    up_std_name.parentNode.parentNode.style.display='inline-block'// display edit form
    std_name.parentNode.parentNode.style.display='none'// hide save data form
}

// update rcord after changing any data
function updateRecord() {
    var up_std_obj = {
        name: up_std_name.value,
        email: up_std_email.value,
        age: up_std_age.value
    }

    var u = document.getElementById(get_id).childNodes;
    u[0].innerHTML = up_std_obj.name;
    u[1].innerHTML = up_std_obj.email;
    u[2].innerHTML = up_std_obj.age;

    up_std_name.parentNode.parentNode.style.display='none'// hide edit form
    std_name.parentNode.parentNode.style.display='inline-block'// display save data form


}


