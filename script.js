//Make gameboard empty array and winning conditions.
//have method that analyses gameboard to see if any
//winning conditions are met by filtering through
//the board and only returning the array with number
//of position. 
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

   // const checkWin 
})();

//This module will take care of creating the players
//and alternating between them. It will access the gameboard
//methods in order to update the board array
const gameController = (() => {

})();

const Player = (number, sign) => {
    return{number, sign};
};

