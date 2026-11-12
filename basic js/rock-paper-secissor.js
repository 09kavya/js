function rps(user,computer){
    if(user===computer) return "draw";

    if(user==="paper" && computer==="rock") return "user";
    if(user==="secisor" && computer==="paper") return "user";
    if(user==="rock" && computer==="secisor") return "user";

    return "computer";
}

x=rps("rock","rock");
console.log(x);