let n = 5
let star = ''
for (var i = 1; i<=n; i++){
    for (var j=1; j<=n; j++){
        star += '*'
    }
    console.log(star)
    star=''
}