let n = 5
let star = ''
for (var i =0; i<n; i++){
    for (var j=5; j>i; j--){
        star+='*'
    }
    console.log(star)
    star=''
}