let products=[
{name:"Laptop",category:"tech"},
{name:"Headphones",category:"tech"},
{name:"T-Shirt",category:"fashion"},
{name:"Shoes",category:"fashion"}
];

let cart=[];

function displayProducts(list){

let container=document.getElementById("productContainer");
container.innerHTML="";

list.forEach(product=>{

let div=document.createElement("div");
div.className="product";

div.innerHTML=`
<h3>${product.name}</h3>
<button onclick="addToCart('${product.name}')">
Add to Cart
</button>
`;

container.appendChild(div);

});
}

function filterProducts(category){

if(category==="all"){
displayProducts(products);
}else{
displayProducts(products.filter(p=>p.category===category));
}
}

function addToCart(item){

cart.push(item);

let cartList=document.getElementById("cart");
cartList.innerHTML="";

cart.forEach(c=>{
let li=document.createElement("li");
li.innerText=c;
cartList.appendChild(li);
});
}

displayProducts(products);