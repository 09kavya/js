// BMI Calculator

function bmi(weight,height){
    let calculate=(weight/(height*height));

    return calculate;
}

console.log(bmi(54,1.7).toFixed(2));