function gameboard() {
  const chessboard = {}

  for (let row = 1; row <= 8; row++) {
    chessboard[row] = {}

    for (
      let column = "A";
      column <= "H";
      column = String.fromCharCode(column.charCodeAt(0) + 1)
    ) {
      chessboard[row][column] = []
    }
  }
  return chessboard
}

function driver() {
    const board = gameboard()
    board[1].A.push('knight')
    console.log(board)
}

module.exports = {
  z: driver,
}
