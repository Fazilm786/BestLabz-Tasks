let n = 5
let num = ''
for (var i=1; i<=n; i++){
    for(var j=1; j<=i; j++){
        num+=j.toString()
    }
    console.log(num)
    num=''
}