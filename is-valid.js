
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  const symbols = [ 'x', 'o', null, 'O', 'X' ]

//check if only 'x' 'o' or 'null' are used. 
  function checkSymbols(cel){
    return symbols.includes(cel);
  }


  function isValidBoard(board) {
   // return true or false


   //applying the function of symbols checking on the rows of the board array (the function has been already declared in the Global scoop)
    const validSymbolsForCells = board.map(row => {     
        return row.map(symb => {
            return checkSymbols(symb)
        })
    })
    
    //checking of all arrays elements has valid symbols 
    const rowsCorrect = validSymbolsForCells
        .map(row => row.every(symbolValid => symbolValid === true))
        .every(row => row === true)

    
    //check if every array have the correct length 
    const boardCorrectSize = board
        .map(row => row.length)
        .reduce((acc, curr) => acc + curr) == 9 ;

    return rowsCorrect && boardCorrectSize
  }


  console.log(isValidBoard(board))




  module.exports = {isValidBoard}