let p=document.querySelector("p");
function dblclick(){
    p.style.color="yellow";
}

p.addEventListener("dblclick",dblclick);
p.removeEventListener("dblclick",dblclick);