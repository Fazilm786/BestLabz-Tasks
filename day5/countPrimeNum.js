let n = 10
let count = 0
let i = 0
var ans
while (i<=n){
    if (i===2){
        count++
    }
    else if (i===3 || i===5 || i===7){
        count++
    }
    else if (i>3){
        number = i % 2 
        if(number !== 0){
            if((i%3)!==0 || (i%5)!==0 || (i%7)!==0 ){
                
                for (var j=3; j<=n; j++){
                    ans=j*j
                
                    if(ans ===  i){
                        // console.log('prime')
                        count++
                        break
                    }
                    else{
                        // count++
                        // break
                        // console.log('priime')
                    }
                }
            }
            else{
                // count++
            }
        }
    }
    i++
}
console.log(count)