let pScore = 0;
let cScore = 0;
let currentResult;
let cChoice;

const buttons = document.querySelector(".button-container")

const title = document.querySelector("h1");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".results");

rock.addEventListener("click", () => 
{
    cChoice = getComputerChoice();
    currentResult = playRound("rock", cChoice);
    
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

        result.textContent = "rock vs. " + cChoice +"! You " + currentResult + " this round, the score is " + pScore + " vs. " + cScore;

        gameOver(pScore, cScore);
});

paper.addEventListener("click", () => 
{
    cChoice = getComputerChoice();
    currentResult = playRound("paper", cChoice);

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

        result.textContent = "paper vs. " + cChoice +"! You " + currentResult + " this round, the score is " + pScore + " vs. " + cScore;
        
        gameOver(pScore, cScore);
});

scissors.addEventListener("click", () => 
{
    cChoice = getComputerChoice();
    currentResult = playRound("scissors", cChoice);

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

        result.textContent = "scissors vs. " + cChoice +"! You " + currentResult + " this round, the score is " + pScore + " vs. " + cScore;

        gameOver(pScore, cScore);
});




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


    



function gameOver(pScore, cScore) 
{
    if (pScore == 3) 
    {
        title.textContent = "Congratulations!!! You Won";
        buttons.remove();

    }else if(cScore == 3)
    {
        title.textContent = "Unlucky.. You lost!";
        buttons.remove();
    }
}

