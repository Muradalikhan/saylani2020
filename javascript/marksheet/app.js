

// ***************************making your marksheet ***************************

var subj_1=prompt('Enter name of first subject');
var subj_2=prompt('Enter name of second subject');
var subj_3=prompt('Enter name of third subject');
var subj_1_marks=+prompt('Enter obtained marks of first subject');
var subj_2_marks=+prompt('Enter obtained marks of second subject');
var subj_3_marks=+prompt('Enter obtained marks of third subject');
var total_marks_each_sub=100;
var total_marks_all_sub=300;
var total_obtainMarks=subj_1_marks+subj_2_marks+subj_3_marks;
var per_subj1=subj_1_marks*100/100;
var per_subj2=subj_2_marks*100/100;
var per_subj3=subj_3_marks*100/100;
var total_per=total_obtainMarks*100/300;
console.log(total_obtainMarks,total_per)


var subj_1_Ref=document.getElementById('subj-1');
var subj_2_Ref=document.getElementById('subj-2');
var subj_3_Ref=document.getElementById('subj-3');
var marksPerSubject_Ref=document.getElementsByClassName('marks');
var obt_marks_1_Ref=document.getElementById('obt-marks-1');
var obt_marks_2_Ref=document.getElementById('obt-marks-2');
var obt_marks_3_Ref=document.getElementById('obt-marks-3');
var per_1_Ref=document.getElementById('percentage-1');
var per_2_Ref=document.getElementById('percentage-2');
var per_3_Ref=document.getElementById('percentage-3');
var total_marks_Ref=document.getElementById('Total-marks');
var total_obt_marks_Ref=document.getElementById('Total-obt-marks');
var total_per_Ref=document.getElementById('total-percentage');


subj_1_Ref.innerHTML=subj_1;
subj_2_Ref.innerHTML=subj_2;
subj_3_Ref.innerHTML=subj_3;
marksPerSubject_Ref[0].innerHTML='100';
marksPerSubject_Ref[1].innerHTML='100';
marksPerSubject_Ref[2].innerHTML='100';
obt_marks_1_Ref.innerHTML=subj_1_marks;
obt_marks_2_Ref.innerHTML=subj_2_marks;
obt_marks_3_Ref.innerHTML=subj_3_marks;
per_1_Ref.innerHTML=per_subj1+'%';
per_2_Ref.innerHTML=per_subj2+'%';
per_3_Ref.innerHTML=per_subj3+'%';
total_marks_Ref.innerHTML=300;
total_obt_marks_Ref.innerHTML=total_obtainMarks;
total_per_Ref.innerHTML=total_per+'%';











// ************************* Marksheet with grade and remarks *************************

// var percentage,grade,remarks;
// var obtainMarks1=+prompt('Enter your obtain number in first subject');
// var obtainMarks2=+prompt('Enter your obtain number in second subject');
// var obtainMarks3=+prompt('Enter your obtain number in third subject');
// var totalObtainMarks=obtainMarks1+obtainMarks2+obtainMarks3;
// var totalMarks=300;
//     percentage=totalObtainMarks*100/totalMarks;
//     percentage=percentage.toFixed(2);

//     if(percentage>=80){
//         grade='A-one';
//         remarks='Excellent'
//     }
//     else if(percentage>=70){
//         grade='A';
//         remarks='Good'
//     }
//     else if(percentage>=60){
//         grade='B';
//         remarks='You need to improve'
//     }
//     else if(percentage<60){
//         grade='Fail';
//         remarks='Sorry'
//     }

//     document.write('<h1>Marks sheet</h1> <br><br>')
//     document.write('Total marks : '+totalMarks+'<br>')
//     document.write('Marks obtained : '+totalObtainMarks+'<br>')
//     document.write('Percentage : '+percentage+'% <br>')
//     document.write('Grade : '+grade+' <br>')
//     document.write('Remarks : '+remarks+' <br>')
