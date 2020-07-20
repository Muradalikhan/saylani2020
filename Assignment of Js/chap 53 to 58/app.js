


// ****************** Assignment 53 to 58 ************************

var imgArr=['imges/img1.jpg','imges/img2.jpg','imges/img3.jpg','imges/img4.jpg']
var getImg=document.getElementById('model-img');
function openModel(img){
    document.getElementById('model').style.display='inline-block';

    getImg.src=img.src;
    getImg.setAttribute('class','model-img')
    document.getElementById('gallery').style.opacity='0.5';
    document.getElementById('task-2').style.opacity='0.5';

}

function closeModel(){
    document.getElementById('model').style.display='none';
    document.getElementById('gallery').style.opacity='1';
    document.getElementById('task-2').style.opacity='1';



}

// next
var c=-1;
function nextImg(){
    c++
    getImg.src=imgArr[c];
  if(c==3){
      c=-1;
  }
}

// previous
var b=4
function preImg(){
    b--
    getImg.src=imgArr[b];
  if(b==0){
      b=4;
  }
}

var fontArr=['10px','20px','30px','40px','50px','60px','70px','80px',]
var paraRef=document.getElementById('para');
var s=0;
function increaseFontSize(){
    s++;
    paraRef.style.fontSize= fontArr[s];
}
function decreaseFontSize(){
    if(s==0){

        paraRef.style.fontSize= fontArr[s];
    }
    else if(s>0){
        s--;
        paraRef.style.fontSize= fontArr[s];

    }
}