function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.random();
    random = random * 3;
    const randomNumber = Math.floor(random);
    return choices [randomNumber];
}

function Roshambo() {
    this.play = (userChoice) => {
        const computerChoice = getComputerChoice();
        switch (userChoice + "-" + computerChoice){
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                return `WINNER! The Computer chose ${computerChoice}`;

            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                return `LOSER! The Computer chose ${computerChoice}`;

            case "rock-rock":
            case "paper-paper":
            case "scissors-scissors":
                return `TIE! The Computer chose ${computerChoice}`;
        }
    }
}