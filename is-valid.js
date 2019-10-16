
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]




  function isValidBoard(board) {
    // ...implement your logic here, return true or false
    return board.map(e => e.length).reduce((a, b) => a + b) == 9;
  }


 




  module.exports = {isValidBoard}