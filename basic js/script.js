let a=10;  //let is blocked scope ye curly braces ke andr use hota h
let a=15;




// Scope (global, block, functional)
//      global scope
var a=10;
// block scope :  var can access anywhere in this code bcoz var ek functional scope h thatswhy we use  let bcoz it is blocked scope
 {
    var b=10;
 }
//  functional scope
 function abc(){
    var c=10;
 }




 //Reassignment , redeclaration

 var a=20;
 a=40;      //Reassignment and updation

  var a=20;      //redeclaration is allowed only in var

  let a=20;
  a=40;    //Reassignment

   let a=20;    //redeclaration is not allowed in let it gives an error