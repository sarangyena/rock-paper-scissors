function computerPlay(){
    const pick=["Rock","Paper","Scissors"];
    let random=0;
    random=Math.floor(Math.random()*3);
   return pick[random];
}
function playRound(player,computer){
    console.log(player);
    if(player.charAt(0)=='r'||'R'){
        if(computer.charAt(0)=='R'){
            console.log("It's a tie! Both of you played Rock!");
        }else if(computer.charAt(0)=='S'){
            console.log("You win! Rock beats Scissors!")
        }else{
            console.log("You lose! Paper beats Rock!");
        }
    }else if(player.charAt(0)=='p'||'P'){
        if(computer.charAt(0)=='P'){
            console.log("It's a tie! Both of you played Paper!");
        }else if(computer.charAt(0)=='R'){
            console.log("You win! Paper beats Rock!")
        }else{
            console.log("You lose! Scissors beats Paper!");
        }
    }else if(player.charAt(0)=='s'||'S'){
        if(computer.charAt(0)=='S'){
            console.log("It's a tie! Both of you played Scissors!");
        }else if(computer.charAt(0)=='P'){
            console.log("You win! Scissors beats Paper!")
        }else{
            console.log("You lose! Rock beats Paper!");
        }
    }else{
        console.log("The only choices are Rock, Paper and Scissors.");
    }
}
function game(){
    for (let i=0; i<5; i++){
        const player=prompt("Enter your pick: ");
        const computer=computerPlay();
        playRound(player,computer);
        console.log(computer);
    }
}
    
game();

