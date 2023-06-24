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
  //Implement pretty print
}

function knight(positionX, positionY) {
  return {
    positionX: positionX,
    positionY: positionY,

    getPosition: function () {
      return `Current position: ` + positionX + positionY
    },
  }
}

function insertKnight(board, letterCoordinate, numberCoordinate) {
  board[numberCoordinate][letterCoordinate].push("knight")
  return knight(letterCoordinate, numberCoordinate)
}

function driver() {
  const board = gameboard()
  const createdKnight = insertKnight(board, "D", 5)
  console.log(createdKnight.getPosition())
  //board[7]['H'].push('knight')
  console.log(board)
}

module.exports = {
  z: driver,
}
