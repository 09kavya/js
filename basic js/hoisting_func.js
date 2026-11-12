// declaration hoisting

abcd();

function abcd(){
    console.log("hey");
}

// expression hoisting

sum();


let sum=function(){
    let a=10;
    let b=20;

    console.log(a+b);

}