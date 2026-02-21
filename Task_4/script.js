// ---------- LOCAL STORAGE TODO ----------

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
let list=document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{
let li=document.createElement("li");
li.innerText=task;

li.onclick=function(){
tasks.splice(index,1);
localStorage.setItem("tasks",JSON.stringify(tasks));
renderTasks();
};

list.appendChild(li);
});
}

function addTask(){
let input=document.getElementById("taskInput");
tasks.push(input.value);
localStorage.setItem("tasks",JSON.stringify(tasks));
input.value="";
renderTasks();
}

renderTasks();


// ---------- PRODUCT FILTER ----------

let products=[
{name:"Laptop",category:"tech"},
{name:"Phone",category:"tech"},
{name:"Novel",category:"book"},
{name:"Dictionary",category:"book"}
];

function filterProducts(category){

let container=document.getElementById("products");
container.innerHTML="";

products
.filter(p=>category==="all" || p.category===category)
.forEach(p=>{
let div=document.createElement("div");
div.innerText=p.name;
container.appendChild(div);
});
}

filterProducts("all");