const x = require("./knightTree.js")
const y = require("./knightInsert.js")

//Return knight moves tree
function driver() {
    const tree = x.knightTree(["D", 4])
    return tree.root
  }
  
//Insert knight on gameboard, and print position for posible moves
function test() {
    const board = gameboard()
    return y.insertKnight(board, 'D')
}

module.exports = {
    z: driver,
}