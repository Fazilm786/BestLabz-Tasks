let n = 5
let star = ''
for(var a=1; a<=n; a++){
    for(var b=a; b<n; b++){
        star+=' '

    }
    for(let c=0; c<a; c++){
        star+='* '
    }
    console.log(star)
    star=""
}
for(var d=1; d<n; d++){
    for(let e=1; e<=d; e++){
        star+=' '
    }
    for(var f=n; f>d; f--){
        star+='* '
    }
    console.log(star)
    star=''
}
