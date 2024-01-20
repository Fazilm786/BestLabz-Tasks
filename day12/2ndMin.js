let a = [5,2,6,0,8,7,1,4]
let min = a[0]
let min2 = a[0]
for (var i=0; i<a.length; i++){
    if (min>a[i]){
    min=a[i]

    }
}
// }console.log(min)
for(var j = 0 ; j<a.length; j++){
    if(min2>a[j] && min!==a[j]){
        min2=a[j]
    }
}
console.log(min2)