let a=[2,5,1,3,8,9]
for (var i=0; i<a.length; i++){
    for(var j=0; j<a.length; j++){
        if(a[i]>a[j]){
            let val = a[i]
            a[i] = a[j]
            a[j] = val
        }
    }
}
console.log(a)