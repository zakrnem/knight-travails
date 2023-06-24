function gameboard() {
  const chessboard = {}

  for (let row = 1; row <= 8; row++) {
    chessboard[row] = []

    for (
      let column = "A";
      column <= "H";
      column = String.fromCharCode(column.charCodeAt(0) + 1)
    ) {
      chessboard[row].push(column)
    }
  }
  return chessboard
}

function driver() {
    const board = gameboard()
    console.log(board[1])
}

module.exports = {
  z: driver,
}
