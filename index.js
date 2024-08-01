const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    // console.log(choice);
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie!";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    } else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie!"){
        return "It's a Tie!"
    }else if(result == "Player"){
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput == true;
            return choiceInLower
        }
    }
}

function game(){
    let scoreComputer = 0;
    let scorePlayer = 0;
    console.log("Hello There!")
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("********************");
        if(checkWinner (playerSelection, computerSelection) == "player"){
            scorePlayer++;

        }else if(checkWinner (playerSelection, computerSelection) == "computer"){
            scoreComputer++;
        }
    }
    console.log("GAME OVER!")
    if(scorePlayer > scoreComputer){
        console.log("Player Won!")
    } else if (scoreComputer > scorePlayer){
        console.log("Computer Won!")
    }else {
        console.log("We have a Tie!")
    }
}

game();