let n = 9
let star = ''
for (var i=0; i<n; i++){
    for(var j=n; j>i; j--){
        star+=' '
    }
    for(var k=0; k<=i; k++){
        star+='*'
    }
    console.log(star)
    star=''
}