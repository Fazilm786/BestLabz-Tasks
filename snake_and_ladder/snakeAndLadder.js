const prompt = require("prompt-sync")({ sigint: true });
const player = prompt("Choose How Maney Players Playing This Game--> ")
        // board---------------------
let array=[]
for (var i =0; i<100;i++){
    array[i]=i+1
}
console.log(array)
        // players------------------------
let winers=[]
let players=[]
for(var j=0; j<player ; j++){
    players[j]=0
}        
// console.log(players)
function startGame(){
    let  random = Math.floor(Math.random()*6)+1
    console.log('Your Dies Number is 🎲 ' ,random)
    if(random===1){
        console.log('winer')
        startGame()
    }
    else{
    }
}
startGame()















function playBoard(){
    for(var k=0; k<players.length; k++){ 
        const prompt = require("prompt-sync")({ sigint: true });
        const simple = prompt(`PLAYER ${k+1} PRESS THE ENTER BUTTON --> to PLAY`)
        function dies(){
            // dies-----------------------
            random = Math.floor(Math.random()*6)+1
            console.log('Your Dies Number is 🎲 ' ,random)
        }
        if(dies() === 6){
            if (random === 6 && players[k] !== 0){
                players[k]+=6
                dise()
            }
            else{
                dies()
            }
        }
        if (random === 1 && players[k]===0 && players[k]+random <= 100){
            console.log(`PLAYER ${k+1} -----------> start the game :)`)
            dies()
            players[k]+=1
            console.log(players[k])
        }
        if(random===6 && players[k] !== 0 && players[k]+random <= 100){
            dies()
            players[k]+=6
            console.log(players[k])
        }
        if(random===1 && players[k] !== 0 && players[k]+random <= 100){
            dies()
            players[k]+=1
            console.log(players[k])
        }
        if(random === 6 || random === 1){
                dies()
        }
        if(array[3]===players[k]){
            console.log(players[k])
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 14`)
            players[k]+=10
            console.log(players[k])
        }
        if(array[8]===players[k]){
            console.log(players[k]) 
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 31`)
            players[k]+=22
            console.log(players[k])
        }
        if(array[16]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 7`)
            players[k]-=10
            console.log(players[k])
        }
        if (array[19]===players[k]){
            console.log(players[k])
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 38`)
            players[k]+=18
            console.log(players[k])
        }
        if (array[27]===players[k]){
            console.log(players[k])
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 84`)
            players[k]+=56
            console.log(players[k])
        }
        if (array[39]===players[k]){
            console.log(players[k])
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 59`)
            players[k]+=19
            console.log(players[k])
        }
        if (array[50]===players[k]){
            console.log(players[k])
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 67`)
            players[k]+=16
            console.log(players[k])
        }
        if (array[53]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 34`)
            players[k]-=20
            console.log(players[k])
        }
        if (array[61]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 19`)
            players[k]-=43
            console.log(players[k])
        }
        if (array[62]===players[k]){
            console.log(players[k])
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 81`)
            players[k]+=18
            console.log(players[k])      
        }
        if (array[63]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 60`)
            players[k]-=4
            console.log(players[k])
        }
        if (array[70]===players[k]){
            console.log(players[k])
            console.log(`This is LADDER player ${k+1} MOVE ${players[k]} TO /////////// 91`)
            players[k]+=20
            console.log(players[k])
        }
        if (array[86]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 24`)
            players[k]-=63
            console.log(players[k])
        }
        if (array[92]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 73`)
            players[k]-=20
            console.log(players[k])
        }
        if (array[94]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 75`)
            players[k]-=20
            console.log(players[k])
        }
        if (array[98]===players[k]){
            console.log(players[k])
            console.log(`This is SNAKE player ${k+1} MOVE ${players[k]} TO 🐍~~~~~~~~~~~🐍 78`)
            players[k]-=21
            console.log(players[k])
        }
        if(players[k]!==0 && players[k]+random <= 100){
                players[k]+=random
                console.log(players[k],'🎈🎈')
        }
        console.log('Player',k+1,'score is',players[k])  
    } 
}
