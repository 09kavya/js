// use rest parameter to accept any number of scores and return the total.

function getscore(...score){
    let total=0;
    score.forEach(function(val){
        total +=val;
    });
    return total;
}

console.log(getscore(10,20,45,71,1,3,45,5,95));