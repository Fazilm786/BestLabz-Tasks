let n = 5
let star = ''
for (var i = 1; i<=n; i++){
    for(var j=n; j>i; j--){
        star+=' '
    }

    for(var k=1; k<=i; k++){
        if(i===1 || i===2 || i===n){
            star+='* '

        }
        else if (k===1 || (k-i)===0){
            star+='* '
        }
        else{
            star+='  '
        }
    }
    console.log(star)
    star=''
}