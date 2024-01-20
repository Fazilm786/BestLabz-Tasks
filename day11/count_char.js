let a = ['a','a','c','d','c','a','b']
a.sort()
count=1
for(var i = 0; i<a.length; i++){
    if(a[i]===a[i+1]&&i<a.length){
        count++
    }
    else if (a[i]!==a[i+1]&&i<a.length){
        console.log(a[i],'is',count,'time')
        count=1
    }
    else if (i===a.length-1){
        if(a[i-1]===a[i]){
            count++
            console.log(a[i],'is',count,'time')
        }
        else{
            console.log(a[i],'is',count,'time')
        }
    }
}
