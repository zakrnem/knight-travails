function gameboard(board, positionArr) {
  if (board === undefined) {
    const chessboard = {}

    for (let row = 1; row <= 8; row++) {
      chessboard[row] = {}

      for (
        let column = "A";
        column <= "H";
        column = String.fromCharCode(column.charCodeAt(0) + 1)
      ) {
        chessboard[row][column] = '_'
      }
    }
    return chessboard
    //Implement pretty print
  } else {
    if(positionArr !== null) {
      const letterCoordinate = positionArr[0]
      const numberCoordinate = positionArr[1]
      board[numberCoordinate][letterCoordinate] = 'k'
    }
  }
}

function test() {
  const board = gameboard()
  gameboard(board, 'D4')
  gameboard(board, 'D5')
  gameboard(board, 'E4')
  gameboard(board, 'E3')
  gameboard(board, 'F4')
  return board
}

module.exports = {
  gameboard: gameboard,
  test: test
}