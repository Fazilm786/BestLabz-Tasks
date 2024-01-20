let n = 10
let num1 = 0
let num2 = 1
let ans = 0
let sum
for (var i=0; i<n; i++){
    ans += num1
    sum = num1 + num2
    num1 = num2
    num2 = sum
    ans+=','
}
console.log(ans)