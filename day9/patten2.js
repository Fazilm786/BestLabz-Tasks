let n = 5
let star = ""
let a = '*'
for (var i=0; i<n; i++){
    for(var j=1; j<=n; j++){
        star+=a
        if (j%2 === 0){
            if (a === '*'){
                a='#'
            }
            else{
                a='*'
            }
        }
    }
    console.log(star)
    star=''
}