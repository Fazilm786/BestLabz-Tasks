let n = 4
let num = ''
for (var i=1; i<=n; i++){
    for(var j=n; j>i; j--){
        num+=' '
    }
    for(var k=1; k<=i; k++){
        num+=(k*2).toString()
    }
    console.log(num)
    num=''
}