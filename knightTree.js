const z = require('./gameboard.js')
const y = require('./knightInsert.js')
const w = require('./knightMoves.js')

function knightNode(start, predecessor) {
  return {
    root: start,
    predecessor: predecessor,
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

function buildTree(start, maxDepth, predecessor) {
  maxDepth--
  const node = new knightNode(start, predecessor)
  const moves = w.knightMoves(start)
  if (moves === null) {
    return null
  } else {
    if (maxDepth > 0) {
      node.move1 = buildTree(moves[0], maxDepth, start)
      node.move2 = buildTree(moves[1], maxDepth, start)
      node.move3 = buildTree(moves[2], maxDepth, start)
      node.move4 = buildTree(moves[3], maxDepth, start)
      node.move5 = buildTree(moves[4], maxDepth, start)
      node.move6 = buildTree(moves[5], maxDepth, start)
      node.move7 = buildTree(moves[6], maxDepth, start)
      node.move8 = buildTree(moves[7], maxDepth, start)
    }
    return node
  }
}

function Tree(start) {
  return {
    root: buildTree(start, 7),
  }
}

module.exports = {
  knightTree: Tree,
}
