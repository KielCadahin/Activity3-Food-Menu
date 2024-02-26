document.getElementById("divMenu").style.display= "none";
document.getElementById("read1").style.display= "none";
document.getElementById("read2").style.display= "none";
document.getElementById("read3").style.display= "none";
document.getElementById("read4").style.display= "none";

function proceed(event){
event.preventDefault();

let nName = nickname.value;
pNickname.innerHTML = nName;

    document.getElementById("pNickname").style.display= "block";
    document.getElementById("divMenu").style.display= "block";
    document.getElementById("formNickname").style.display= "none";
}



function read1(){
    
        document.getElementById("divMenu").style.display= "none";
        document.getElementById("read1").style.display= "block";
}
function back1(){
    
    document.getElementById("divMenu").style.display= "block";
    document.getElementById("read1").style.display= "none";
}



function read2(){
    
    document.getElementById("divMenu").style.display= "none";
    document.getElementById("read2").style.display= "block";
}
function back2(){
    
    document.getElementById("divMenu").style.display= "block";
    document.getElementById("read2").style.display= "none";
}

function read3(){
    
    document.getElementById("divMenu").style.display= "none";
    document.getElementById("read3").style.display= "block";
}
function back3(){
    
    document.getElementById("divMenu").style.display= "block";
    document.getElementById("read3").style.display= "none";
}

function read4(){
    
    document.getElementById("divMenu").style.display= "none";
    document.getElementById("read4").style.display= "block";
}
function back4(){
    
    document.getElementById("divMenu").style.display= "block";
    document.getElementById("read4").style.display= "none";
}