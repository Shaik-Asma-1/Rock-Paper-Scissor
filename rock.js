let userScore=0;
let compScore=0;

let userScorePara=document.querySelector(".user-score");
let compScorePara=document.querySelector(".comp-score");

let msg=document.querySelector(".msg");
let choices=document.querySelectorAll(".choice");

const compChoiceFn=()=>{
    let options=["rock","paper","scissor"];
    let randIdx=Math.floor(Math.random()*3);
    console.log(options[randIdx]);
    return options[randIdx];
}
const drawGame=()=>{
    msg.innerText="Game was a draw";
    msg.style.backgroundColor = "purple";
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You won. ur ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Comp won. ${compChoice} beats ur ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    const compChoice=compChoiceFn();
    if(compChoice===userChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{                   
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
}