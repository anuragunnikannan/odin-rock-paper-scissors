function computerPlay()
{
    const items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random()*items.length)]
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log("Player: "+playerSelection);
    console.log("Computer: "+computerSelection);
    if(computerSelection === playerSelection)
    {
        return "Tie!";
    }
    else if(computerSelection === "ROCK")
    {
        if(playerSelection === "PAPER")
        {
            return "Player Wins";
        }
        else
        {
            return "Computer Wins";
        }
    }
    else if(computerSelection === "PAPER")
    {
        if(playerSelection === "SCISSORS")
        {
            return "Player Wins";
        }
        else
        {
            return "Computer Wins";
        }
    }
    else if(computerSelection === "SCISSORS")
    {
        if(playerSelection === "ROCK")
        {
            return "Player Wins";
        }
        else
        {
            return "Computer Wins";
        }
    }
}

function game()
{
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 1;i<=5;i++)
    {
        let playerSelection = prompt("Enter ROCK, PAPER OR SCISSORS:");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if(result === "Player Wins")
        {
            playerScore++;
        }
        else if(result === "Computer Wins")
        {
            computerScore++;
        }
    }
    console.log("You: "+playerScore+"  Computer: "+computerScore);
    if(playerScore > computerScore)
    {
        console.log("You Win!");
    }
    else if(computerScore > playerScore)
    {
        console.log("You Lose!");
    }
    else
    {
        console.log("Tie!");
    }
}

game();