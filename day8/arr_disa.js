var a =[6,4,7,2,5]
for (var i=0; i<a.length; i++){
    for (var j=i; j<a.length; j++){
        if (a[i]<a[j]){
            let val = a[i]
            a[i] = a[j]
            a[j] = val
        }
    }
    
}
console.log(a)

