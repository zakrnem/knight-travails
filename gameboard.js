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
        chessboard[row][column] = "_"
      }
    }
    return chessboard
    //Implement pretty print
  } else {
    if (positionArr !== null) {
      const letterCoordinate = positionArr[0]
      const numberCoordinate = positionArr[1]
      board[numberCoordinate][letterCoordinate] = "k"
    }
  }
}

module.exports = {
  gameboard: gameboard,
}
