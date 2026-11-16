let btn=document.querySelector(".btn");
let filenp=document.querySelector("#filenp");
btn.addEventListener("click",function(){
    filenp.click();
});
filenp.addEventListener("change",function(dets){
    const file=dets.target.files[0];
    if(file){
        btn.textContent=file.name;
    }
});