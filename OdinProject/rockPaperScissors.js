

const getComputerChoice = function() {
    var choice = ['Rock','Paper','Scissors']
    return choice[Math.floor(Math.random() * 3)]; 
}

const playerSelection = function() {
    Rock = /rock/i;
    Paper = /paper/i;
    Scissors = /scissors/i;
    let result;
    while (!Rock.test(result) && !Paper.test(result) && !Scissors.test(result)) { 
        let selection = prompt("Please make your choice (rock, paper, or scissors");
        if (Rock.test(selection)) {         
            result = 'Rock';     
        } else if (Paper.test(selection)) {         
            result = 'Paper';     
        } else if (Scissors.test(selection)) {         
            result = 'Scissors';     
        } else {
            return playerSelection();
        }
        return result; 
    }
}

const computerSelection = getComputerChoice;

const playRound = function(playerSelection, computerSelection) {
    return `${playerSelection} : ${computerSelection}`;
}

