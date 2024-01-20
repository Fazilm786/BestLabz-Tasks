let a = [5,1,2,6,8,7]
let min = a[0]
let min2 = a[0]
let min3 = a[0]
for(var i=0; i<a.length; i++){
    if (a[i]<min){
        min=a[i]

    }
}
for(var j=0; j<a.length; j++){
    if(min2>a[j] && min !== a[j])
    // if (min2>min){
    //     // if(min2>a[j]){
    //     // }
        min2=a[j]

    // }
}
// console.log(min2)
for(var k=0; k<a.length; k++){
    if(min3>a[k] && min2!==a[k] && min!==a[k]){
        min3=a[k]
    }
}
console.log(min3)