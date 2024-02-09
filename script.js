playGame();



function getComputerChoice() 
{
    let randomNum = Math.floor(Math.random() * 3);
    let choice;

    switch (randomNum) {
        case 0:
            choice = "rock";
        break;

        case 1:
            choice = "paper";
        break;
        
        case 2:
            choice = "scissors";
        break;
    
        default:
            break;
    }

    return choice.toLowerCase();
}

function getPlayerChoice() 
{
    let choice = prompt("Choose Rock, Paper or Scissors!");
    return choice.toLocaleLowerCase();
}

function playRound(PlayerChoice, ComputerChoice)
{
    let result;
    
    if ((PlayerChoice == "rock" & ComputerChoice == "scissors") || (PlayerChoice == "paper" & ComputerChoice == "rock") || (PlayerChoice == "scissors" & ComputerChoice == "paper") ) 
    {
        result = "won";
    } else if ( (ComputerChoice == "rock" & PlayerChoice == "scissors") || (ComputerChoice == "paper" & PlayerChoice == "rock") || (ComputerChoice == "scissors" & PlayerChoice == "paper") )
    {
        result = "lost";
    } else if (ComputerChoice == PlayerChoice) 
    {
        result = "drew"   
    }
    
    return result;
}

function playGame() 
{
    let pScore = 0;
    let cScore = 0;
    let currentResult;

    while ( (pScore < 3) & (cScore < 3) ) 
    {
        currentResult = playRound(getPlayerChoice(), getComputerChoice());
        
        switch (currentResult) 
        {
            case "won":
                pScore++;
            break;

            case "lost":
                cScore++;
            break;
        
            default:
            break;
        }

        console.log("You " + currentResult + " this round, the score is " + pScore + " vs. " + cScore);
    }

    if (pScore == 3) 
    {
        console.log("Congratulations!!! You Won")   
    }else
    {
        console.log("Unlucky.. You lost!")
    }
    
}