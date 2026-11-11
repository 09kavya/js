// pass a function into another function and execute it inside.


function abcd(val){
    val();

}
abcd(function(){
    console.log("Hey");
});