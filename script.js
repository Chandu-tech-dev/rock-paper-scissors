let choices=['rock','paper','scissors'];
const result=document.getElementById('finalresult');
const player=document.getElementById('playerresult');
const computer=document.getElementById('computerresult');
const buttons=document.querySelectorAll('.button');
const displayresult=document.getElementById("displayresult");
const playerpointsdisplay=document.getElementById("playerscore");
const computerpointsdisplay=document.getElementById("computerscore");
let playerchoice="";
let computerchoice="";
let playerpoints=0;
let computerpoints=0;
buttons[0].addEventListener('click',function(){
    playerchoice="rock";
});
buttons[1].addEventListener('click',function(){
    playerchoice="paper";
}); 
buttons[2].addEventListener('click',function(){
    playerchoice="scissors";
});
function computerchoices(){
   computerchoice=choices[Math.floor(Math.random()*3)];


}
displayresult.addEventListener('click',function(){
    computerchoices();
   player.textContent="Player choice: "+playerchoice;
   computer.textContent="Computer choice: "+computerchoice;
   const winner=play();
    result.textContent=winner;
    if (winner=="You win!") {
        result.style.color="green";
        playerpoints++;
        playerpointsdisplay.textContent=`palyer Score :`+playerpoints;

    }
    else if(winner=="You lose!"){
        result.style.color="red";
        computerpoints++;
        computerpointsdisplay.textContent= `Computer Score :`+computerpoints;
    }
    else{
        result.style.color="black";
    }
});

function play(){
    if (playerchoice === computerchoice) {
         return "It's a tie!";
    }
    switch (playerchoice) {
        case "rock":
             return (computerchoice === "scissors") ? "You win!" : "You lose!";
            break;
        case "paper":
            return(computerchoice === "rock") ?  "You win!" : "You lose!";
            break;
        case "scissors":
            return(computerchoice === "paper") ?  "You win!" : "You lose!";
            break;
    }
}