const x = require('./knightTree.js')
const y = require('./knightInsert.js')

//Return knight moves tree
function driver() {
  const tree = x.knightTree(['D', 4])
  return tree.root.move1.move4/*.move6.move1*/.root
}

/* function levelOrder(tree, soughtCoordinate) {
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
        if (currentString === soughtString) {
          while (current.predecessor !== undefined) {
            path.unshift(current.root)
            current = current.predecessor
            path.unshift(current.predecessor.root)
          }
          return path
        }
        output.push(current.root)

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
} */

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

/* function findPath(tree, soughtCoordinate, pathArray) {
  if (tree !== null) {
    const rootString = JSON.stringify(tree.root);
    const soughtString = JSON.stringify(soughtCoordinate);

    if (rootString === soughtString) {
      pathArray.push(tree.root);
      return pathArray
    }
    if (pathArray.length > 0) {
      pathArray.push(tree.root);
      return pathArray
    } else {
      const result1 = findPath(tree.move1, soughtCoordinate, newPathArray1);
      const result2 = findPath(tree.move2, soughtCoordinate, newPathArray2);
      const result3 = findPath(tree.move3, soughtCoordinate, newPathArray3);
      const result4 = findPath(tree.move4, soughtCoordinate, newPathArray4);
      const result5 = findPath(tree.move5, soughtCoordinate, newPathArray5);
      const result6 = findPath(tree.move6, soughtCoordinate, newPathArray6);
      const result7 = findPath(tree.move7, soughtCoordinate, newPathArray7);
      const result8 = findPath(tree.move8, soughtCoordinate, newPathArray8);
    }
  } else {
    return pathArray
  }
} */


/* function testPathFind() {
  const tree = x.knightTree(['D', 4])
  //return tree.root
  return findPath(tree.root, ['E', 2], [])
} */

function test() {
  console.time()
  const tree = x.knightTree(['D', 4])
  //console.log(tree.root.move1)
  //let result = findPath(tree.root, ['D', 6], [])
  let result = findPath(tree.root, ['D', 3], [])
  console.timeEnd()
  return result
}

module.exports = {
  z: driver,
  test: test,
  //path: testPathFind
}