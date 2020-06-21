/********
VARIABLES
*********/
let clickedNumbers = [];
let currentPlayer  = "X";
let isGameOver     = false;
let playerX        = [];
let playerO        = [];
let winSets        = [
    /* horizontal win sets */
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    /* vertical win sets */
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    /* diagonal win sets */
    [0, 4, 8],
    [2, 4, 6]
];

/********
FUNCTIONS
*********/
function cellClicked() {
    let cell        = event.target;
    let player      = document.querySelector("#player");
    let number      = Number(cell.getAttribute("number"));
    if( clickedNumbers.includes(number)
    ||  isGameOver === true
    ){
        return;
    };
    clickedNumbers.push(number);
    let playerValue = player.innerHTML;
    cell.innerHTML  = currentPlayer;
    if( playerValue === "X"){
        playerX.push(number);
        checkWin();
        currentPlayer = "O";
    }
    else
    if( playerValue === "O"){
        playerO.push(number);
        checkWin();
        currentPlayer = "X";
    };
    player.innerHTML = currentPlayer;
};

function checkWin() {
    for(let i = 0; i < winSets.length; i++){
        let set = winSets[i];
        let hitCount = 0;
        for(let a = 0; a < set.length; a++){
            let number = set[a];
            if( currentPlayer === "X"){
                if( playerX.includes(number) ){
                    hitCount++;
                };
            }
            else
            if( currentPlayer === "O"){
                if( playerO.includes(number) ){
                    hitCount++;
                };
            };
            if(hitCount === 3){
                displayMessage();
                let winner = document.querySelector("#winner");
                    winner.innerHTML = `${currentPlayer} is the winner!`;
                isGameOver = true;
            };
        };
    };
}

function resetGame() {
     window.location.reload();
};

function displayMessage() {
    let endMessage = document.querySelector("#endMessage");
        endMessage.style.display = "block";
};

/***
INIT
****/
let resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetGame);
let endMessage = document.querySelector("#endMessage");
    endMessage.addEventListener("click", resetGame);
