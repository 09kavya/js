// Add a highlisht class to every even item in a list.
// ul ke andr li h uska every 2nd child
let li=document.querySelectorAll("ul li:nth-child(2n)");            
li.forEach(function(elem){
    elem.classList.add("highlight");
});