let computerScore = 0;
let playerScore = 0;

function computerPlay()
{
    const items = ["ROCK", "PAPER", "SCISSORS"];
    return items[Math.floor(Math.random()*items.length)]
}

function selectionToEmoji(selection)
{
    if(selection == "ROCK")
    {
        return "✊";
    }
    else if(selection == "PAPER")
    {
        return "✋";
    }
    else
    {
        return "✌️";
    }
}

function playRound(playerSelection, computerSelection)
{
    document.querySelector("#s_player").innerText = selectionToEmoji(playerSelection);
    document.querySelector("#s_computer").innerText = selectionToEmoji(computerSelection);
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

function game(result)
{
    if(result === "Player Wins")
    {
        playerScore++;
    }
    else if(result === "Computer Wins")
    {
        computerScore++;
    }
    document.querySelector("#player").innerText = playerScore;
    document.querySelector("#computer").innerText = computerScore;
    document.querySelector(".result").innerText = "";
    if(playerScore == 5)
    {
        document.querySelector(".result").innerText = "You win!";
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5)
    {
        document.querySelector(".result").innerText = "Computer wins!";
        playerScore = 0;
        computerScore = 0;
    }
}

buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let result = playRound(button.id, computerPlay());
        game(result);
    });
});