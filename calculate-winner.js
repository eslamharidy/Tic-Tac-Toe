const board = [
    [null, 'x', 'x'],
    ['o', 'o', 'o'],
    [null, 'x', 'o']
]

//a function to check if all elements are same per array but only applicable for only one array 
function allRowIsSame(arr) {
    const first = arr[0]; /// taking the 1st element of the array to compare to others 
    return arr.every(element => element === first && element !== null); /// checking if all elements = to the 1st element of the array
}

///function to get the columns of all arrays into rows of new array made up by this function 
function getColumns(rows) {
    return [
        [rows[0][0], rows[1][0], rows[2][0]],
        [rows[0][1], rows[1][1], rows[2][1]],
        [rows[0][2], rows[1][2], rows[2][2]],
    ]
}


/// function to make up new arrays with teh diagonals 
function getDiagonals(rows) {
    return [
        [rows[0][0], rows[1][1], rows[2][2]],
        [rows[0][2], rows[1][1], rows[2][0]],
    ]
}



    function calculateWinner(board) {
        const winningRow = board.find(allRowIsSame)
        if (winningRow) {
            return winningRow[0];
        }
        const columns = getColumns(board)
        const winningcolumn = columns.find(allRowIsSame)
        if (winningcolumn) {
            return winningcolumn[0];
        }
        const diagonals = getDiagonals(board)
        const winningdiagonal = diagonals.find(allRowIsSame)
        if (winningdiagonal) {
            winningdiagonal[0];
        }
        return null
    }


   
    module.exports.calculateWinner = calculateWinner
    