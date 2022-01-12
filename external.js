function computerPlay()
{
    let items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random()*items.length)]
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log("P: "+playerSelection);
    console.log("C: "+computerSelection);
    if(computerSelection === playerSelection)
    {
        return "Tie!";
    }
    else if(computerSelection === "ROCK")
    {
        if(playerSelection === "PAPER")
        {
            /* return "You Win! "+playerSelection+" beats "+computerSelection; */
            return "p";
        }
        else
        {
            /* return "You Lose! "+computerSelection+" beats "+playerSelection; */
            return "c";
        }
    }
    else if(computerSelection === "PAPER")
    {
        if(playerSelection === "SCISSORS")
        {
            /* return "You Win! "+playerSelection+" beats "+computerSelection; */
            return "p";
        }
        else
        {
            /* return "You Lose! "+computerSelection+" beats "+playerSelection; */
            return "c";
        }
    }
    else if(computerSelection === "SCISSORS")
    {
        if(playerSelection === "ROCK")
        {
            /* return "You Win! "+playerSelection+" beats "+computerSelection; */
            return "p";
        }
        else
        {
            /* return "You Lose! "+computerSelection+" beats "+playerSelection; */
            return "c";
        }
    }
}

/* console.log(playRound(playerSelection, computerSelection)); */

function game()
{
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 1;i<=5;i++)
    {
        let playerSelection = prompt("Enter ROCK, PAPER OR SCISSORS:");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if(result === "p")
        {
            playerScore++;
        }
        else if(result === "c")
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