gameRound = 0;

function playTheGame() {
    let startGame = confirm("Do you want to play a game?");
    if (!startGame) {
        alert("No problem, Goodbye");
    } else {
        alert("lets party!");
        let userNumber = prompt("please confirm a number between 0 and 10");
        if (isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye");
            return playTheGame()
        } else if (userNumber > 10) {
            alert("Sorry it’s not a good number, Goodbye");
            return
        } else {
            let computerNumber = Math.floor(Math.random() * 11);
            test(userNumber,computerNumber);
        }
    }
}
playTheGame();

function test(userNumber, computerNumber) {
    gameRound++
    if(gameRound > 3){
        return alert(`the computer number was ${computerNumber}.I am sorry you are looser`);
    }
    if (userNumber == computerNumber) {
        return alert("WINNER!")
    }
    let clue = userNumber > computerNumber?"bigger" : "smaller"
    alert(`Your number is ${clue} then the computers, guess again`)
    // if(userNumber > )
    return test(parseInt(prompt("New Guess!")),computerNumber)
}

