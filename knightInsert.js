const x = require("./gameboard.js")

function knight(positionX, positionY) {
  return {
    positionX: positionX,
    positionY: positionY,

    getPosition: function () {
      return [positionX, positionY]
    },
  }
}

function insertKnight(board, positionArr) {
  x.gameboard(board, positionArr)
  return board
}

module.exports = {
  insertKnight: insertKnight,
}
