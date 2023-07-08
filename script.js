const Player = (number, sign) => {
    return{number, sign};
};

//Make gameboard empty array and winning conditions.
//have method that analyses gameboard to see if any
//winning conditions are met by filtering through
//the board and only returning the array with number
//of position. 

//Also in this module you'll want to implement a function
//that places the players sign into the board array and probably
//one to reset the board but thats for later
const gameBoard = (() => {
    const board = 
    ['','','o',
     'x','o','',
     'x','x','x'];
    
    const winningConditions = 
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

   const checkWin = (playerSign) => {
        const placements = board.map((element, index) => {
            if (element === playerSign){
                return index;
            }
        }).filter(index => index !== undefined);
        return winningConditions.some(condition => 
            condition.every(index => placements.includes(index)));
   }
console.log(checkWin('x'));
})();

//This module will take care of creating the players
//and alternating between them. It will access the gameboard
//methods in order to update the board array
const gameController = (() => {
    const playerOne = Player(1, 'x');
    const playerTwo = Player(2, 'o');


})();

//This module will update the html
const displayController = (() => {

})();



