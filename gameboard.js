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
}

function checkMoves(moveX, moveY) {
  moveX = moveX.charCodeAt() < 65 || moveX.charCodeAt() > 90 ? null : moveX
  moveY = moveY > 8 || moveY < 0 ? null : moveY
  return moveX === null || moveY === null ? null : [moveX, moveY]
}

function knightMoves(start) {
  if(start !== null) {
    const startX = start[0]
    const startY = start[1]

    const moveX1 = String.fromCharCode(startX.charCodeAt(0) - 2)
    const moveY1 = startY + 1
    const move1 = checkMoves(moveX1, moveY1)

    const moveX2 = String.fromCharCode(startX.charCodeAt(0) - 2)
    const moveY2 = startY - 1
    const move2 = checkMoves(moveX2, moveY2)

    const moveX3 = String.fromCharCode(startX.charCodeAt(0) + 2)
    const moveY3 = startY - 1
    const move3 = checkMoves(moveX3, moveY3)

    const moveX4 = String.fromCharCode(startX.charCodeAt(0) + 2)
    const moveY4 = startY + 1
    const move4 = checkMoves(moveX4, moveY4)

    const moveX5 = String.fromCharCode(startX.charCodeAt(0) - 1)
    const moveY5 = startY + 2
    const move5 = checkMoves(moveX5, moveY5)

    const moveX6 = String.fromCharCode(startX.charCodeAt(0) - 1)
    const moveY6 = startY - 2
    const move6 = checkMoves(moveX6, moveY6)

    const moveX7 = String.fromCharCode(startX.charCodeAt(0) + 1)
    const moveY7 = startY - 2
    const move7 = checkMoves(moveX7, moveY7)

    const moveX8 = String.fromCharCode(startX.charCodeAt(0) + 1)
    const moveY8 = startY + 2
    const move8 = checkMoves(moveX8, moveY8)

    return [move1, move2, move3, move4, move5, move6, move7, move8]
  } else {
    return null
  }
  
}

function buildTree(start, maxDepth) {
  maxDepth--
  const node = new knightNode(start)
  const moves = knightMoves(start)

  if (moves === null) {
    return null
  } else {
    if (maxDepth > 0) {
      node.move1 = buildTree(moves[0], maxDepth)
      node.move2 = buildTree(moves[1], maxDepth)
      node.move3 = buildTree(moves[2], maxDepth)
      node.move4 = buildTree(moves[3], maxDepth)
      node.move5 = buildTree(moves[4], maxDepth)
      node.move6 = buildTree(moves[5], maxDepth)
      node.move7 = buildTree(moves[6], maxDepth)
      node.move8 = buildTree(moves[7], maxDepth)
    }
    return node
  }  
}

function Tree(start) {
  return {
    root: buildTree(start, 8),
  }
}

function driver() {
  const tree = Tree(["D", 4])
  return tree.root.move1.move3.move4.move1
  //return knightNode(['D', 4])
  /* const board = gameboard()
  const createdKnight = insertKnight(board, "D", 5)
  console.log(createdKnight.getPosition())
  console.log(board) */
}

module.exports = {
  z: driver,
}
