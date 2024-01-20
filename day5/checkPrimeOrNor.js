let n = 15
let ans
let a 
if(n===2){
    console.log(n,'is prime number')
}
else if (n===3 || n===5 || n===7){
    console.log(n,'is a prime number')
}
else if (n>3){
    number = n % 2
    if (number!==0){
        if(n%3!== 0 || n%5 !== 0 || n%7 !== 0){
            // vari=3
            for(var i=3; i<=n; i++){
                ans=i*i
            
                if(ans === n){
                   a=`${n} is not a prime number` // console.log(n,'is not a prime number')
                    break
                }
                else{
                   a=`${n} is a prime number` // console.log(n,'is prime numbernnn')
                    // break
                }
                // console.log(ans)
            }
                
            
            
        }
        else {
            console.log(n,'is a prime number')
    }
       
    }
    else {
        console.log(n,'is not a prime number')
    }
}
else {
    console.log(n,'is not a prime number')
}
console.log(a)