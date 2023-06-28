const x = require("./knightTree.js")
const y = require("./knightInsert.js")

//Return knight moves tree
function driver() {
  const tree = x.knightTree(["D", 4])
  return tree.root
}

function levelOrder(node) {
  let queue = []
  let output = []

  if (node.root !== null) {
    queue.push(node)

    while (queue.length > 0) {
      let current = queue[0]
      if (current !== null) {
        output.push(current.root)

        if(current.move1 !== null) queue.push(current.move1)
        if(current.move2 !== null) queue.push(current.move2)
        if(current.move3 !== null) queue.push(current.move3)
        if(current.move4 !== null) queue.push(current.move4)
        if(current.move5 !== null) queue.push(current.move5)
        if(current.move6 !== null) queue.push(current.move6)
        if(current.move7 !== null) queue.push(current.move7)
        if(current.move8 !== null) queue.push(current.move8)
      }
      queue.splice(0, 1)
    }
    return output
  }
}

function test() {
    console.time()
    const tree = x.knightTree(["D", 4])
    //console.log(tree.root.move1)
    let result = levelOrder(tree.root)
    console.timeEnd()
    return result
}

module.exports = {
  z: driver,
  test: test,
}
