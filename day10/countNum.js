let a = [3,4,3,6,4,4,8,6]
a.sort(function(a,b){return(a-b)})
count=1
for(var i=0; i<a.length; i++){
    if(a[i]===a[i+1] && i<a.length-1) {
        count++
    }
    else if (a[i]!==a[i+1]&&i<a.length-1){
        console.log(a[i],'is',count,'time')
        count=1
    }
    else if (i ===a.length-1){
        if(a[i-1]===a[i]){
            count++
            console.log(a[i],'is',count,'time')
        }
        else{
            console.log(a[i],'is',count,'time')
        }
    }
}

