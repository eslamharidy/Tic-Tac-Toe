const { calculateWinner } = require("./calculate-winner")


const board = [
    [null, 'x', 'x'],
    ['o', 'o', 'x'],
    [null, 'x', 'o']
]

function gameIsTie(board){
    const hasWinner = calculateWinner(board) !== null
    const hasWinnerIf_O_getsAllTurns = calculateWinner(replaceNullsWith(board, 'o')) !== null
    const hasWinnerIf_X_getsAllTurns = calculateWinner(replaceNullsWith(board, 'x')) !== null
    return !hasWinner &&
        !hasWinnerIf_O_getsAllTurns &&
        !hasWinnerIf_X_getsAllTurns
}

function replaceNullsWith(rows, replacement) {
    return rows.map(row => row.map(symbol => {
        if (symbol === null) {
            return replacement
        }
        return symbol
    }))
}

gameIsTie(board)










module.exports.gameIsTie = gameIsTie