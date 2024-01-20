let n = 8
let star = ''
for(var i=0; i<n; i++){
    for(var j=0; j<i; j++){
        star+=' '
    }
    for(var k=n; k>i; k--){
        star+='*'
    }
    console.log(star)
    star=''
}