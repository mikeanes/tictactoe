const Player = (number, sign) => {
    return{number, sign};
};

const gameBoard = (() => {
    const board = 
    ['','','',
     '','','',
     '','',''];
    
    const winningConditions = 
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

    const placeSign = (index, playerSign) => {
        if (board[index] === ''){
            board[index] = playerSign;
        }
    };

   const checkWin = (playerSign) => {
        const placements = board.map((element, index) => {
            if (element === playerSign){
                return index;
            }
        }).filter(index => index !== undefined);
        return winningConditions.some(condition => 
            condition.every(index => placements.includes(index)));
   };

   const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
   };

   return{placeSign, checkWin, resetBoard};
})();

const gameController = (() => {
    const playerOne = Player(1, 'x');
    const playerTwo = Player(2, 'o');

    let currentPlayer = playerOne;
    let gameOver = false;
    let turnCount = 0;

    const changeTurn = () => {
        if(currentPlayer === playerOne){
            currentPlayer = playerTwo;
        }else{
            currentPlayer = playerOne;
        }
    };

    const playTurn = (index) => {
        gameBoard.placeSign(index, currentPlayer.sign);
        if(gameBoard.checkWin(currentPlayer.sign)){
            gameBoard.resetBoard();
            gameOver = true;
            turnCount = 0;
        }else{
            changeTurn();
            turnCount++;
            console.log(turnCount);
        }
        
    };

    const getCurrentPlayerSign = () => {
        return currentPlayer.sign;
    }
    const getGameOver = () => {
        return gameOver;
    }
    const resetGameOver = () => {
        gameOver = false;
        turnCount = 0;
    }
    const getTie = () => {
        if(turnCount === 9 && gameBoard.checkWin(currentPlayer.sign) == false){
            turnCount = 0;
            return true;
        }
    }

   
    return{getCurrentPlayerSign, playTurn, getGameOver, resetGameOver, getTie};
})();

const displayController = (() => {
    const squares = document.querySelectorAll('.gameBoard button');
    const replay = document.getElementById('replay');

    const resetSquares = () => {
        squares.forEach(square => {
            square.innerHTML = '';
        });
    };

    const disableSquares = () => {
        squares.forEach(square => {
            square.disabled = true;
        });
    };

    const enableSquares = () => {
        squares.forEach(square => {
            square.disabled = false;
        });
    };

    squares.forEach(square => {
        square.addEventListener('click', () => {
            if(square.textContent.trim() === ''){
                square.textContent = gameController.getCurrentPlayerSign();
                gameController.playTurn(square.id);
            }
            if(gameController.getGameOver()){
                console.log('Player ' + gameController.getCurrentPlayerSign() + ' won!');
                disableSquares();

            }else if(gameController.getTie()){
                console.log("It's a tie!");
                disableSquares();
            }
        });
    });

    replay.addEventListener('click', () => {
        resetSquares();
        gameController.resetGameOver();
        gameBoard.resetBoard();
        enableSquares();
    })
})();



