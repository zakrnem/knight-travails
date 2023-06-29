const x = require("./knightTree.js")
const y = require("./knightInsert.js")

//Return knight moves tree
function driver() {
  const tree = x.knightTree(["D", 4])
  return tree.root
}

function levelOrder(tree, soughtCoordinate) {
  let queue = []
  let output = []
  let path = []

  if (tree.root !== null) {
    queue.push(tree)

    while (queue.length > 0) {
      let current = queue[0]
      if (current !== null) {
        const currentString = JSON.stringify(current.root)
        const soughtString = JSON.stringify(soughtCoordinate)
        if (currentString === soughtString) return "Found"
        output.push(current.root)
        //let booleanFound = 0

        if (current.move1 !== null) queue.push(current.move1)
        if (current.move2 !== null) queue.push(current.move2)
        if (current.move3 !== null) queue.push(current.move3)
        if (current.move4 !== null) queue.push(current.move4)
        if (current.move5 !== null) queue.push(current.move5)
        if (current.move6 !== null) queue.push(current.move6)
        if (current.move7 !== null) queue.push(current.move7)
        if (current.move8 !== null) queue.push(current.move8)
      }
      queue.splice(0, 1)
    }
    return output
  }
}

function findPath(tree, soughtCoordinate, pathArray) {
  const rootString = JSON.stringify(tree.root)
  const soughtString = JSON.stringify(soughtCoordinate)
  if (pathArray.length > 0) {
    pathArray.push(tree.root)
    return pathArray
  }
  if (rootString === soughtString) {
    pathArray.push(tree.root)
    return pathArray
  }
}

function test() {
  console.time()
  const tree = x.knightTree(["D", 4])
  //console.log(tree.root.move1)
  let result = levelOrder(tree.root, ["B", 5])
  console.timeEnd()
  return result
}

module.exports = {
  z: driver,
  test: test,
}
