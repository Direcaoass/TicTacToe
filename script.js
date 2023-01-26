"use strict";
class TicTacToe {
    constructor() {
        this.X = "X";
        this.O = "O";
        this.currentPlayer = this.X;
        this.matchCount = 0;
        this.gameOver = false;
        this.winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.messageDisplay = document.querySelector(".msgDisplay");
        this.restartButton = document.querySelector(".restart");
        this.board = document.querySelector(".boardGrid");
        this.init();
    }

    init() {
        this.createBoard();
        this.restartButton.addEventListener("click", () => this.restartGame());
        this.messageDisplay.innerText = `${this.currentPlayer} player turn`;
    }

    createBoard() {
        for (let i = 0; i < 9; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("click", (event) => this.handleMove(event));
            this.board.appendChild(square);
        }
    }

    handleMove(event) {
        if (!this.gameOver) {

            const square = event.target;
            if (!square.innerText) {
                square.innerText = this.currentPlayer;
                this.matchCount++;
                this.checkForWin();
                this.checkForDraw();
                this.switchPlayer();
            }
            else this.messageDisplay.innerText = 'Invalid Move'
        }
    }

    checkForWin() {
        for (let i = 0; i < this.winCombinations.length; i++) {
            const [a, b, c] = this.winCombinations[i];
            if (this.board.children[a].innerText === this.currentPlayer && this.board.children[b].innerText === this.currentPlayer && this.board.children[c].innerText === this.currentPlayer) {
                this.messageDisplay.innerText = `Game OVER >> Player ${this.currentPlayer} wins!`;
                this.gameOver = true;
                return;
            }
        }
    }

    checkForDraw() {
        if (this.matchCount === 9) {
            this.messageDisplay.innerText = " Game OVER >> It's a draw!";

        }
    }

    switchPlayer() {
        if (!this.gameOver) {
            this.currentPlayer = this.currentPlayer === this.X ? this.O : this.X;
            this.messageDisplay.innerText = `${this.currentPlayer} player turn`;
        }
    }

    restartGame() {
        this.matchCount = 0;
        this.gameOver = false;
        this.currentPlayer = this.X;
        this.messageDisplay.innerText = "";
        for (let i = 0; i < this.board.children.length; i++) {
            this.board.children[i].innerText = "";
        }
    }
}

new TicTacToe();
