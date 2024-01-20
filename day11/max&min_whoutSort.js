let a =[5,1,2,6,8]
let min = a[0]
let max = a[0]
for(var i = 0; i<a.length; i++){
    if(min>a[i]){
        min=a[i]
    }
    if(max<a[i]){
        max=a[i]
    }
}
console.log('The minimen value is :',min)
console.log('The maximum value is :',max)