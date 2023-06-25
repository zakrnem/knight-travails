function checkMoves(moveX, moveY) {
    moveX = moveX.charCodeAt() < 65 || moveX.charCodeAt() > 72 ? null : moveX
    moveY = moveY > 8 || moveY < 1 ? null : moveY
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

module.exports = {
    knightMoves: knightMoves,
    checkMoves: checkMoves,
}