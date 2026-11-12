function grade(marks){
   
    if(marks>=90 && marks<=100) return "A";
           
    if(marks>=80 && marks<90) return "B";
            
    if(marks>=70 && marks<80) return "C";
    
    if(marks>=60 && marks<70) return "D";

    if(marks>=33 && marks<60) return "E";

    if(marks>=33 && marks<60) return "Fail";
    return "Tnvalid marks";
    
}
console.log(grade(54));