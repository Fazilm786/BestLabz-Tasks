let a = [5,1,2,6,8,7]
let max = a[0]
let max2 = a[0]
for (var i=0; i<a.length; i++){
    if(a[i]>max){
        max=a[i]
    }
}
for(var j=0; j<a.length; j++){
    if(max2<a[j] && max !== a[j]){
        max2=a[j]
    }
}
console.log(max2)