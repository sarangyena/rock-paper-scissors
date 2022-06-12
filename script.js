function computerPlay(){
    const pick=["Rock","Paper","Scissors"];
    let random=0;
    random=Math.floor(Math.random()*3);
   return pick[random];
}
function userPlay(){
    const pick=["Rock","Paper","Scissors"];
    let random=0;
    random=Math.floor(Math.random()*3);
   return pick[random];
}
function playRound(player,computer){
    if(player.charAt(0)==='r'||player.charAt(0)==='R'){
        if(computer.charAt(0)==='R'){
            console.log("It's a tie! Both of you played Rock!");
        }else if(computer.charAt(0)==='S'){
            console.log("You win! Rock beats Scissors!")
            user++;
        }else{
            console.log("You lose! Paper beats Rock!");
            enemy++;
        }
    }else if(player.charAt(0)==='p'||player.charAt(0)==='P'){
        if(computer.charAt(0)==='P'){
            console.log("It's a tie! Both of you played Paper!");
        }else if(computer.charAt(0)==='R'){
            console.log("You win! Paper beats Rock!")
            user++;
        }else{
            console.log("You lose! Scissors beats Paper!");
            enemy++;
        }
    }else if(player.charAt(0)==='s'||player.charAt(0)==='S'){
        if(computer.charAt(0)==='S'){
            console.log("It's a tie! Both of you played Scissors!");
        }else if(computer.charAt(0)==='P'){
            console.log("You win! Scissors beats Paper!")
            user++;
        }else{
            console.log("You lose! Rock beats Paper!");
            enemy++;
        }
    }else{
        console.log("The only choices are Rock, Paper and Scissors.");
    }
}
function game(){
   
    for(let i=0; i<5; i++){
        const player=prompt("Enter your pick: ");
        const computer=computerPlay();
        playRound(player,computer);
    }
    console.log("Score: Player: " + user +" | Computer: " + enemy);
    if(user>enemy){
        console.log("Congratulations! You won!");
    }else if(enemy>user){
        console.log("The computer wins! Try again next time!");
    }else{
        console.log("It's a tie! Compete again to know who's smarter!");
    }
}
let choice;
do{
    var user=0;
    var enemy=0;
    game();
    choice=prompt("Do you want to play again? (y/n): ");
}while(choice.charAt(0)=='y'||choice.charAt(0)=='Y');

