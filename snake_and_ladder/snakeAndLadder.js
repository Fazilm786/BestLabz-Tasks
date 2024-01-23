const prompt = require("prompt-sync")({ sigint: true });
const how = prompt("Choose How Maney hows Playing This Game--> ")
let array = []
let player = []
let times = []
let winers =[]
for(var i=0;i<100; i++){
    array[i]=i+1
}
for(var j=0; j<how; j++){
    player[j]=0
    times[j]=0
    winers[j]=0
}
console.log(array)
let die = 0
function game(){
    for(var k=0; k<how; k++){
        const prompt = require("prompt-sync")({ sigint: true });
        const simple = prompt(`PLAYER ${k+1} PRESS THE ENTER BUTTON --> to PLAY`)
        function rotate(){
            if (player[k]!==100){
                random=Math.floor(Math.random()*6)+1
                die=random
                console.log('Player',k+1, 'dies number is 🎲',die)
                times[k]+=1
            }
        } 
        rotate()
        function add(){
            if (player[k]!==0 && player[k]+die<=100){
                player[k]+=die
                snakeAndladder()
            }
        }
        add()
        if(player[k]===0 && die===1){  
            player[k]+=die
            console.log('player',k+1,'start the game 🏁')
            rotate()
            add()
            snakeAndladder()
        }
        if (die===1 || die===6 && player[k]!==100){
            let l = 0
            let m = 1
            while(l<m){
                if(die ===6 || die ===1 && player[k]!==100){
                    if (die===1 && player[k]===0){
                        player[k]+=die
                        console.log('player',k+1,'start the game 🏁')
                    }
                    rotate()
                    add()
                    if (player[k]!==100){
                        m++
                    }
                }
                l++
            }    
        }
        function snakeAndladder(){
            if (player[k]===array[3] || player[k]===array[8] || player[k]===array[19] || player[k]===array[27] || player[k]===array[39] || player[k]===array[50] || player[k]===array[62] || player[k]===array[70]){
                lastValue=player[k]
                if (player[k]===array[3]){
                    player[k]+=10
                }
                if (player[k]===array[8]){
                    player[k]+=22
                }
                if (player[k]===array[19]){
                    player[k]+=18
                }
                if (player[k]===array[27]){
                    player[k]+=56
                }
                if (player[k]===array[39]){
                    player[k]+=19
                }
                if (player[k]===array[50]){
                    player[k]+=16
                }
                if (player[k]===array[62]){
                    player[k]+=18
                }
                if (player[k]===array[70]){
                    player[k]+=20
                }
                console.log('THIS IS _____-LADDER-_____🦿🦿🦿🦿_____PLAYER MOVE',lastValue,'---TO---',player[k])
                rotate()
                add()
            }
            if (player[k]===array[16] || player[k]===array[53] || player[k]===array[61] || player[k]===array[63] || player[k]===array[86] || player[k]===array[92] || player[k]===array[94] || player[k]===array[98]){
                lastValue=player[k]
                if (player[k]===array[16]){
                    player[k]-=10
                }
                if (player[k]===array[53]){
                    player[k]-=20
                }
                if (player[k]===array[61]){
                    player[k]-=43
                }
                if (player[k]===array[63]){
                    player[k]-=4
                }
                if (player[k]===array[86]){
                    player[k]-=63
                }
                if (player[k]===array[92]){
                    player[k]-=20
                }
                if (player[k]===array[94]){
                    player[k]-=20
                }
                if (player[k]===array[98]){
                    player[k]-=21
                }
                console.log('THIS IS _____~SNAKE~_____🐍🐍🐍🐍_____PLAYER MOVE',lastValue,'~~~TO~~~',player[k])
            }
        }
        snakeAndladder()
        console.log('Player',k+1,'TOTAL DISE NUMBER',times[k],'________---OVER ALL TOTAL---_______',player[k])
        if (player[k]===100){
            for (var q=0; q<how;q++){
                if (winers[q]===k+1){
                    break
                }
                else{
                    if (winers[q]===0){
                        winers[q]=k+1
                        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
                        break
                    }
                }
            }
        }
    }
    for (var p = 0 ; p < how ; p++){
        if(player[p]!==100){
            game()
        }
    } 
}
game()
console.log('DICE COUNT :',times)
console.log('WINERS LIST:',winers)
console.log('PLAYER',winers[0],'WIN THE GAME 🏆')
