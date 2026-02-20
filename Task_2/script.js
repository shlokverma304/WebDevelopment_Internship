// FORM VALIDATION

function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name=="" || email==""){
document.getElementById("error").innerText="All fields required!";
return false;
}

if(!email.includes("@")){
document.getElementById("error").innerText="Invalid Email!";
return false;
}

alert("Form Submitted Successfully!");
return false;
}


// TODO LIST

function addTask(){

let task=document.getElementById("taskInput").value;

if(task==="") return;

let li=document.createElement("li");
li.innerText=task;

li.onclick=function(){
this.remove();
}

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";
}