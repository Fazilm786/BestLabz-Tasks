let n =10
let star = ''
let a = '*'
for(var i=1; i<=n; i++){
    for (var j=0; j<n; j++){
        star+=a
    } 
    if(i%2 === 0){
        if(a ==='*'){
            a='#'
        }
        else{
            a='*'
        }
    }   
    console.log(star)
    star=""
}