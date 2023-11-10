

const getComputerChoice = function() {
    var choice = ['Rock','Paper','Scissors']
    return choice[Math.floor(Math.random() * 3)]; 
}

const playerSelection = function() {
    let result;
    Rock = /rock/i;
    Paper = /paper/i;
    Scissors = /scissors/i;
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

const playRound = function() {
    let comp = computerSelection();
    let player = playerSelection();
    if (player == comp) {
        return 'draw';
    } else if (player == 'Rock' && comp == 'Paper' ||
               player == 'Scissors' && comp == 'Rock' ||
               player == 'Paper' && comp == 'Scissors') {
        return 'loss';
    } else if (player == 'Rock' && comp == 'Scissors' ||
               player == 'Scissors' && comp == 'Paper' ||
               player == 'Paper' && comp == 'Rock') {
        return 'win';
    } else {
        return 'error';
    }
}


function askRounds() {

}
