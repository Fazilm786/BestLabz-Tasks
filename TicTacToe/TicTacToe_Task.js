let valP = 'X'
let valC = 'O'
let array = [0,1,2,3,4,5,6,7,8]
let i = 0
let k = 9
        // toss selection ------------------ he select the side -------------heads
const prompt = require("prompt-sync")({ sigint: true });
const toss = prompt("choose any one 'Heads' or 'Tails' :");
        // coin desition ---------------- he win or loos the toss
let arrayToss=['Heads','Tails']
let ans = Math.floor(Math.random()*arrayToss.length)
let coin = arrayToss[ans]
console.log(arrayToss[ans])
            // select X or O -------------------------------
if (toss === coin){
    const prompt = require("prompt-sync")({ sigint: true });
    const xo = prompt("choose 'X' or 'O' :");
    // console.log(`You choose  ${xo}.`);
    if (valP !== xo){
        valP='O'
        valC='X'
        i=0
        k=9
    }
    else{
        valP='X'
        valC='O'
        i=0
        k=9
    }
}
else{
    let sele = ['X','O']
    let desit = Math.floor(Math.random()*sele.length)
    let show = sele[desit]
    // console.log(show)
    if (valC===show){
        valP = 'X'
        valC = 'O' 
        i=1
        k=10
    }
    else{
        valP = 'O'
        valC = 'X'
        i=1
        k=10
    }
}
console.log('Player :',valP,'Computer :',valC)
                // output ---------------------------------
console.log(array[0],'|',array[1],'|',array[2])
console.log('----------')
console.log(array[3],'|',array[4],'|',array[5])
console.log('----------')
console.log(array[6],'|',array[7],'|',array[8])
                // swaping function X O and for loop ----------------------------
function swap(){
        if (i===9){
                i=1
                k=10
                if(valP==='X'){
                        valP='O'
                        valC='X'
                }
                else{
                        valP='X'
                        valC='O'
                }
            }
        else{
                i=0
                k=9
                if(valP==='X'){
                        valP='O'
                        valC='X'
                }
                else{
                        valP='X'
                        valC='O'
                }
        }
        console.log('Player :',valP,'Computer :',valC)
}
                // function output  ------------------------------
function output(){
    console.log(array[0],'|',array[1],'|',array[2])
    console.log(array[3],'|',array[4],'|',array[5])
    console.log(array[6],'|',array[7],'|',array[8])
}
                // wining deside function -------------------------
function winer(){
            // winer or looser ----------------------------------

        if (array[0]=== valP && array[1]===valP && array[2]===valP ){
                console.log('player win the match')
                reset()
                play()
        }
        else if(array[0]=== valC && array[1]===valC && array[2]===valC){
            console.log('computer win the match')
            reset()
            play()
        }
        else if(array[3]===valP && array[4] === valP && array[5]===valP){
                console.log('player win the game')
                reset()
                play()
        }
        else if(array[3]===valC && array[4] === valC && array[5]===valC){
            console.log('computer win the game')
            reset()
            play()
    }
        else if(array[6]===valP && array[7]=== valP && array[8]===valP ){
        console.log('player win the game')
        reset()
        play()
        }
        else if(array[6]===valC && array[7]=== valC && array[8]===valC){
            console.log('computer win the game')
            reset()
            play()
            }
        else if(array[0]===valP && array[3]=== valP && array[6]===valP ){
        console.log('player win the game')
        reset()
        play()
        }
        else if (array[0]===valC && array[3]=== valC && array[6]===valC){
            console.log('computer win the game')
            reset()
            play()
            }
        else if(array[1]=== valP && array[4]=== valP && array[7]===valP ){
        console.log('player win the game')
        reset()
        play()
        
        }
        else if(array[1]=== valC && array[4]===valC && array[7]===valC){
            console.log('computer win the game')
            reset()
            play() 
        }
        else if(array[2]===valP && array[5]=== valP && array[8]===valP ){
        console.log('player win the game')
        reset()
        play()
        
        }
        else if (array[2]===valC && array[5]=== valC && array[8]===valC){
            console.log('computer win the game')
            reset()
            play()
            
            }
        else if(array[0]===valP && array[4]===valP && array[8]===valP ){
        console.log('player win the game')
        reset()
        play()
        
        }
        else if(array[0]===valC && array[4]===valC && array[8]===valC){
            console.log('computer win the game')
            reset()
            play()
            
        }
        else if(array[2]=== valP && array[4]===valP && array[6]===valP){
        console.log('player win the game')
        reset()
        play()
        
        }
        else if(array[2]=== valC && array[4]===valC && array[6]===valC){
            console.log('computer win the game')
            reset()
            play()
            
            }
        // else{
        // console.log ('Match tai')
        //     // swap()
        // }

}
// reset function ----------------------------
function reset(){
    console.log('------------------------------')
    console.log(array[0]=0,'|',array[1]=1,'|',array[2]=2)
    console.log(array[3]=3,'|',array[4]=4,'|',array[5]=5)
    console.log(array[6]=6,'|',array[7]=7,'|',array[8]=8)
    console.log('------------------------------')
    swap()
}
                // main Player and Computer playing function -----------------------
function play (){            
    for(i;i<k;i++){
        if (i%2===0){
                    // player board-----------------------
            function callBack(){
                const prompt = require("prompt-sync")({ sigint: true });
                const xo = prompt("Choose any cell number --> ");
                if (array[xo]!=='X' && array[xo]!=='O'){
                    array[xo]=valP
                }
                else{
                    callBack()
                }
            }
            callBack()
            console.log(array[0],'|',array[1],'|',array[2])
            console.log(array[3],'|',array[4],'|',array[5])
            console.log(array[6],'|',array[7],'|',array[8])
            winer()
        }
        else{
                // computer board----------------------------------
            if (array[0]!=='X' && array[0]!=='O' && array[1]===valC && array[2]===valC){
                array[0]=valC
                console.log('computer choose --> 0')
                output()                        
            }
            else if (array[3]!=='X' && array[3]!=='O' && array[0]===valC && array[6]===valC){
                array[3]=valC
                console.log('computer choose --> 3')
                output()                       
            }
            else if (array[6]!=='X' && array[6]!=='O' && array[0]===valC && array[3]===valC){
                array[6]=valC
                console.log('computer choose --> 6')
                output()                        
            }
            else if (array[1]!=='X' && array[1]!=='O' && array[4]===valC && array[7]===valC){
                array[1]=valC
                console.log('computer choose --> 6')
                output()                        
            }
            else if (array[4]!=='X' && array[4]!=='O' && array[1]===valC && array[7]===valC){
                array[4]=valC
                console.log('computer choose --> 4')
                output()                       
            }
            else if (array[7]!=='X' && array[7]!=='O' && array[1]===valC && array[4]===valC){
                array[7]=valC
                console.log('computer choose --> 7')
                output()                        
            }
            else if (array[2]!=='X' && array[2]!=='O' && array[5]===valC && array[8]===valC){
                array[2]=valC
                console.log('computer choose --> 2')
                output()                       
            }
            else if (array[5]!=='X' && array[5]!=='O' && array[2]===valC && array[8]===valC){
                array[5]=valC
                console.log('computer choose --> 5')
                output()                       
            }
            else if (array[8]!=='X' && array[8]!=='O' && array[2]===valC && array[5]===valC){
                array[8]=valC
                console.log('computer choose --> 8')
                output()                        
            }
            else if (array[0]!=='X' && array[0]!=='O' && array[1]===valC && array[2]===valC){
                array[0]=valC
                console.log('computer choose --> 0')
                output()                        
            }
            else if (array[1]!=='X' && array[1]!=='O' && array[0]===valC && array[2]===valC){
                array[1]=valC
                console.log('computer choose --> 1')
                output()                        
            }
            else if (array[2]!=='X' && array[2]!=='O' && array[0]===valC && array[1]===valC){
                array[2]=valC
                console.log('computer choose --> 2')
                output()                        
            }
            else if (array[3]!=='X' && array[3]!=='O' && array[4]===valC && array[5]===valC){
                array[3]=valC
                console.log('computer choose --> 3')
                output()                        
            }
            else if (array[4]!=='X' && array[4]!=='O' && array[3]===valC && array[5]===valC){
                array[4]=valC
                console.log('computer choose --> 4')
                output()                        
            }
            else if (array[5]!=='X' && array[5]!=='O' && array[3]===valC && array[5]===valC){
                array[5]=valC
                console.log('computer choose --> 5')
                output()                       
            }
            else if (array[6]!=='X' && array[6]!=='O' && array[7]===valC && array[8]===valC){
                array[6]=valC
                console.log('computer choose --> 6')
                output()                       
            }
            else if (array[7]!=='X' && array[7]!=='O' && array[6]===valC && array[7]===valC){
                array[7]=valC
                console.log('computer choose --> 7')
                output()                        
            }
            else if (array[8]!=='X' && array[8]!=='O' && array[6]===valC && array[7]===valC){
                array[8]=valC
                console.log('computer choose --> 8')
                output()                        
            }
            else if (array[0]!=='X' && array[0]!=='O' && array[4]===valC && array[8]===valC){
                array[0]=valC
                console.log('computer choose --> 0')
                output()                       
            }
            else if (array[4]!=='X' && array[4]!=='O' && array[0]===valC && array[8]===valC){
                array[4]=valC
                console.log('computer choose --> 4')
                output()                       
            }
            else if (array[8]!=='X' && array[8]!=='O' && array[0]===valC && array[4]===valC){
                array[8]=valC
                console.log('computer choose --> 8')
                output()                       
            }
            else if (array[2]!=='X' && array[2]!=='O' && array[4]===valC && array[6]===valC){
                array[2]=valC
                console.log('computer choose --> 2')
                output()                       
            }
            else if (array[4]!=='X' && array[4]!=='O' && array[2]===valC && array[6]===valC){
                array[4]=valC
                console.log('computer choose --> 4')
                output()                       
            }
            else if (array[6]!=='X' && array[6]!=='O' && array[2]===valC && array[4]===valC){
                array[6]=valC
                console.log('computer choose --> 6')
                output()                        
            }
            else if (array[0]!=='X' && array[0]!=='O' && array[1]===valP && array[2]===valP){
                array[0]=valC
                console.log('computer choose --> 0')
                output()                      
            }
            else if (array[0]===valP && array[2]===valP && array[1]!=="X" && array[1]!=="O"){
                    array[1]=valC
                    console.log('computer choose --> 1')
                    output()                                  
            }
            else if(array[0]===valP && array[1]===valP && array[2]!=="X" && array[2]!=="O"){                
                    array[2]=valC
                    console.log('computer choose --> 2')
                    output()                                 
            }
            else if (array[3]===valP && array[4]===valP && array[5]!=="X" && array[5]!=="O"){                
                    array[5]=valC
                    console.log('computer choose --> 5')
                    output()                                 
            }
            else if (array[3]===valP && array[5]===valP && array[4]!=="X" && array[4]!=="O"){                
                    array[4]=valC
                    console.log('computer choose --> 4')
                    output()                                  
            }
            else if (array[4]===valP && array[5]===valP && array[3]!=="X" && array[3]!=="O"){                
                    array[3]=valC
                    console.log('computer choose --> 3')
                    output()                                
            }
            else if (array[6]===valP && array[7]===valP && array[8]!=="X" && array[8]!=="O"){                
                    array[8]=valC
                    console.log('computer choose --> 8')
                    output()                   
            }
            else if (array[6]===valP && array[8]===valP && array[7]!=="X" && array[7]!=="O"){                
                    array[7]=valC
                    console.log('computer choose --> 7')
                    output()                                 
            }
            else if (array[7]===valP && array[8]===valP && array[6]!=="X" && array[6]!=="O"){                
                    array[6]=valC
                    console.log('computer choose --> 6')
                    output()                   
            }
            else if (array[0]===valP && array[3]===valP && array[6]!=="X" && array[6]!=="O"){                
                    array[6]=valC
                    console.log('computer choose --> 6')
                    output()                   
            }
            else if (array[0]===valP && array[6]===valP && array[3]!=="X" && array[3]!=="O"){                
                    array[3]=valC
                    console.log('computer choose --> 3')
                    output()                                  
            }
            else if (array[3]===valP && array[6]===valP && array[0]!=="X" && array[0]!=="O"){                
                    array[0]=valC
                    console.log('computer choose --> 0')
                    output()               
            }
            else if (array[1]===valP && array[4]===valP && array[7]!=="X" && array[7]!=="O"){         
                    array[7]=valC
                    console.log('computer choose --> 7')
                    output()              
            }
            else if (array[1]===valP && array[7]===valP && array[4]!=="X" && array[4]!=="O"){                
                    array[4]=valC
                    console.log('computer choose --> 4')
                    output()              
            }
            else if (array[4]===valP && array[7]===valP && array[1]!=="X" && array[1]!=="O"){               
                    array[1]=valC
                    console.log('computer choose --> 1')
                    output()                
            }
            else if (array[2]===valP && array[5]===valP && array[8]!=="X" && array[8]!=="O"){                
                    array[8]=valC
                    console.log('computer choose --> 8')
                    output()        
            }
            else if (array[2]===valP && array[8]===valP && array[5]!=="X" && array[5]!=="O"){                
                    array[5]=valC
                    console.log('computer choose --> 5')
                    output()                
            }
            else if (array[5]===valP && array[8]===valP && array[2]!=="X" && array[2]!=="O"){                
                    array[2]=valC
                    console.log('computer choose --> 2')
                    output()                
            }
            else if (array[0]===valP && array[4]===valP && array[8]!=="X" && array[8]!=="O"){                
                    array[8]=valC
                    console.log('computer choose --> 8')
                    output()                
            }
            else if (array[0]===valP && array[8]===valP && array[4]!=="X" && array[4]!=="O"){                
                    array[4]=valC
                    console.log('computer choose --> 4')
                    output()                
            }
            else if (array[4]===valP && array[8]===valP && array[0]!=="X" && array[0]!=="O"){                
                    array[0]=valC
                    console.log('computer choose --> 0')
                    output()               
            }
            else if (array[2]===valP && array[4]===valP && array[6]!=="X" && array[6]!=="O"){                
                    array[6]=valC
                    console.log('computer choose --> 6')
                    output()                
            }
            else if (array[2]===valP && array[6]===valP && array[4]!=="X" && array[4]!=="O"){                
                    array[4]=valC
                    console.log('computer choose --> 4')
                    output()                
            }
            else if (array[4]===valP && array[6]===valP && array[2]!=="X" && array[2]!=="O"){                
                    array[2]=valC
                    console.log('computer choose --> 2')
                    output()                
            } 
            else if(array[0] !== 'O' && array[0] !=='X' || array[2]!== 'O' && array[2] !== 'X' || array[6] !== 'O' && array[6] !=='X' || array[8] !== 'O' && array[8] !=='X'){
                let arrayCorner=[0,2,6,8]
                for(var x=0; x<9; x++){
                    corner=Math.floor(Math.random()*arrayCorner.length)
                    if(array[arrayCorner[corner]] !== 'O' && array[arrayCorner[corner]] !=='X'){
                            array[arrayCorner[corner]]=valC
                            console.log(`computer choose --> ${arrayCorner[corner]}`)
                            output()    
                            break 
                    }
                }           
            }  
            else if (array[0]==='O' || array[0]==='X' && array[2]==='O'|| array[2]==='X' && array[6]==='O' || array[6]==='X' && array[8]==='O' || array[8]==='X'){
                array[4]=valC
                console.log('computer choose --> 4')
                output()
            }         
            else{
                for(var j = 0; j<array.length; j++){
                    let playC = Math.floor (Math.random()*9)
                    if (array[playC]!=="X" && array[playC]!=="O"){
                        array[playC]=valC
                        console.log('computer choose -->',playC)
                        console.log(array[0],'|',array[1],'|',array[2])
                        console.log(array[3],'|',array[4],'|',array[5])
                        console.log(array[6],'|',array[7],'|',array[8])
                        break                        
                    }
                }  
            }
            winer()
        }  
    }
    reset()
    swap()
    play()
}
        // function call ------------------------
play()