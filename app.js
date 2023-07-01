const x = require('./knightTree.js')
const y = require('./knightInsert.js')

function findNode(tree, soughtCoordinate) {
  let queue = []

  if (tree.root !== null) {
    queue.push(tree)

    while (queue.length > 0) {
      let current = queue.shift()
      if (current !== null) {
        const currentString = JSON.stringify(current.root)
        const soughtString = JSON.stringify(soughtCoordinate)
        if (currentString === soughtString) return current

        if (current.move1 !== null) queue.push(current.move1)
        if (current.move2 !== null) queue.push(current.move2)
        if (current.move3 !== null) queue.push(current.move3)
        if (current.move4 !== null) queue.push(current.move4)
        if (current.move5 !== null) queue.push(current.move5)
        if (current.move6 !== null) queue.push(current.move6)
        if (current.move7 !== null) queue.push(current.move7)
        if (current.move8 !== null) queue.push(current.move8)
      }
    }
    return null
  }
}

function findPath(tree, soughtCoordinate, path) {
  const node = findNode(tree, soughtCoordinate)
  
  if (node !== null) {
    path.unshift(node.root)
    if (node.predecessor !== null) {
      return findPath(tree, node.predecessor, path)
    } else {
      return path
    }
  } else {
    return path
  }
}

function test(startCoordinate, soughtCoordinate) {
  console.time()

  const startArray = startCoordinate.split('')
  startArray[1] = parseInt(startArray[1])
  const endArray = soughtCoordinate.split('')
  endArray[1] = parseInt(endArray[1])

  const tree = x.knightTree(startArray)
  const pathArray = findPath(tree.root, endArray, [])

  const numberOfMoves = pathArray.length-1
  const result = `You made it in ${numberOfMoves} moves, Here's your path: `
  console.timeEnd()
  console.log(result)
  return pathArray
}

//Return knight moves tree
function driver() {
  const tree = x.knightTree(['D', 4])
  return tree.root.move1.move4/*.move6.move1*/.root
}


module.exports = {
  getNode: driver,
  z: test,
}