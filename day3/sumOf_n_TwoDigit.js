let n = 123456
let sum = 0
while(n>0){
    sum += n % 100
    n= n/100
}
console.log(Math.floor(sum))