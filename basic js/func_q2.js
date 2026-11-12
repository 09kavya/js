// fixed this function using early return


function checkAge(age){
    if(age<18) return "Too Young";
    return "Allowed";
}

console.log(checkAge(12));