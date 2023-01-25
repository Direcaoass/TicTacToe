
let moveFlag = false;
let matchCount = 0;

(function createGameBoard() {
    const boardGrid = document.querySelector('.boardGrid');
    for (let i = 1; i < 10; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square')
        boardGrid.appendChild(squareDiv);
        squareDiv.onclick = () => startGame(squareDiv)
    }
}
)();



// function getResult() {
//     const boardArray = document.querySelectorAll(".square")

//     if (boardArray[0].innerText === boardArray[1].innerText && boardArray[0].innerText === boardArray[2].innerText)
//         return alert(`${boardArray[0].innerText} player wins`)

//     else if (boardArray[3].innerText === boardArray[4].innerText && boardArray[3].innerText === boardArray[5].innerText)
//         return alert(`${boardArray[3].innerText} player wins`)

//     else if (boardArray[6].innerText === boardArray[7].innerText && boardArray[6].innerText === boardArray[8].innerText)
//         return alert(`${boardArray[6].innerText} player wins`)

// }





function startGame(squareDiv) {
    let move = getMove();
    if  (matchCount > 8) return alert('End Game?')
    else
        (squareDiv.innerText) ? alert('Invalid move.') : squareDiv.innerText = move;
    // getResult();
    const playerTurn = document.querySelector('.turn');
    playerTurn.innerText = moveFlag ? 'O player turn!' : 'X player turn!';
    matchCount++;
    console.log(matchCount);


}

function getMove() {
    moveFlag = !moveFlag;
    let moveValue = moveFlag ? 'X' : 'O'
    return moveValue
}

