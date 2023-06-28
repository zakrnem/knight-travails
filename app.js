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
      output.push(current.root)

      switch (true) {
        case current.move1 !== null:
          queue.push(current.move1)
          break
        case current.move2 !== null:
          queue.push(current.move2)
          break
        case current.move3 !== null:
          queue.push(current.move3)
          break
        case current.move4 !== null:
          queue.push(current.move4)
          break
        case current.move5 !== null:
          queue.push(current.move5)
          break
        case current.move6 !== null:
          queue.push(current.move6)
          break
        case current.move7 !== null:
          queue.push(current.move7)
          break
        case current.move8 !== null:
          queue.push(current.move8)
          break
      }
      queue.splice(0, 1)
    }
    return output
  }
}

function test() {
  const tree = x.knightTree(["D", 4])
  return levelOrder(tree.root)
}

module.exports = {
  z: driver,
  test: test,
}
