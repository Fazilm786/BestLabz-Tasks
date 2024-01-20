let n = 123456
let mul = 1
while(n>10){
    mul *= Math.floor(n % 100)
    n = (n/100)
    // console.log(mul)
}
console.log(mul)