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
      return [positionX, positionY]
    },
  }
}

function insertKnight(board, letterCoordinate, numberCoordinate) {
  board[numberCoordinate][letterCoordinate].push("knight")
  return knight(letterCoordinate, numberCoordinate)
}

function knightNode(start) {
  return {
    root: start,
    move1: null,
    move2: null,
    move3: null,
    move4: null,
    move5: null,
    move6: null,
    move7: null,
    move8: null,
  }
  //moves must be nodes
}

function knightMoves(start) {
  const startX = start[0]
  const startY = start[1]

  const moveX1 = String.fromCharCode(startX.charCodeAt(0) - 2)
  const moveY1 = startY + 1
  const move1 = [moveX1, moveY1]

  const moveX2 = String.fromCharCode(startX.charCodeAt(0) - 2)
  const moveY2 = startY - 1
  const move2 = [moveX2, moveY2]

  const moveX3 = String.fromCharCode(startX.charCodeAt(0) + 2)
  const moveY3 = startY - 1
  const move3 = [moveX3, moveY3]

  const moveX4 = String.fromCharCode(startX.charCodeAt(0) + 2)
  const moveY4 = startY + 1
  const move4 = [moveX4, moveY4]

  const moveX5 = String.fromCharCode(startX.charCodeAt(0) - 1)
  const moveY5 = startY + 2
  const move5 = [moveX5, moveY5]

  const moveX6 = String.fromCharCode(startX.charCodeAt(0) - 1)
  const moveY6 = startY - 2
  const move6 = [moveX6, moveY6]

  const moveX7 = String.fromCharCode(startX.charCodeAt(0) + 1)
  const moveY7 = startY - 2
  const move7 = [moveX7, moveY7]

  const moveX8 = String.fromCharCode(startX.charCodeAt(0) + 1)
  const moveY8 = startY + 2
  const move8 = [moveX8, moveY8]

  return [move1, move2, move3, move4, move5, move6, move7, move8]
}

function buildTree(start) {
  const node = new knightNode(start)
  node.move1 = knightMoves(start)[0]
  node.move2 = knightMoves(start)[1]
  node.move3 = knightMoves(start)[2]
  node.move4 = knightMoves(start)[3]
  node.move5 = knightMoves(start)[4]
  node.move6 = knightMoves(start)[5]
  node.move7 = knightMoves(start)[6]
  node.move8 = knightMoves(start)[7]

  return node
}

function Tree(start) {
  return {
    root: buildTree(start),
  }
}

function driver() {
  const tree = Tree(["D", 4])
  return tree
  //return knightNode(['D', 4])
  /* const board = gameboard()
  const createdKnight = insertKnight(board, "D", 5)
  console.log(createdKnight.getPosition())
  console.log(board) */
}

module.exports = {
  z: driver
}
