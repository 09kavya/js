let sel = document.querySelector("select");
let device=document.querySelector("#device");
sel.addEventListener("change", function(event) {
    device.textContent=`${event.target.value} Device Selected`;
});