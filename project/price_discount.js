function discountPrice(discount){
    return function(price){
        return price-price * (discount/100);
    };
}
let ten=discountPrice(10);
let twenty=discountPrice(20);

console.log(ten(1200));
console.log(twenty(1200));
