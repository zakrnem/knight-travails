const z = require("./gameboard.js")
const y = require("./knightInsert.js")
const w = require("./knightMoves.js")

function knightNode(start, board) {
  /* y.insertKnight(board, start)
  console.log('Board: ', board) */
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

function buildTree(start, maxDepth, board) {
  maxDepth--
  const node = new knightNode(start, board)
  const moves = w.knightMoves(start)

  if (moves === null) {
    return null
  } else {
    if (maxDepth > 0) {
      node.move1 = buildTree(moves[0], maxDepth, board)
      node.move2 = buildTree(moves[1], maxDepth, board)
      node.move3 = buildTree(moves[2], maxDepth, board)
      node.move4 = buildTree(moves[3], maxDepth, board)
      node.move5 = buildTree(moves[4], maxDepth, board)
      node.move6 = buildTree(moves[5], maxDepth, board)
      node.move7 = buildTree(moves[6], maxDepth, board)
      node.move8 = buildTree(moves[7], maxDepth, board)
    }
    return node
  }
}

function Tree(start) {
  //const board = z.gameboard()
  return {
    root: buildTree(start, 5 /* board */),
  }
}

module.exports = {
  knightTree: Tree,
}
