let n = 5;
let star = ''
for (var i = 1; i<=n; i++){
    for (var j=1; j<i; j++){
        star+=' '
    }
    for(var k=i; k<=n; k++){
        star+='* '
    }
    console.log(star)
    star=''
}