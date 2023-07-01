const z = require('./gameboard')

const result = {
  1: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_' },
  2: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_' },
  3: { A: '_', B: '_', C: '_', D: '_', E: 'k', F: '_', G: '_', H: '_' },
  4: { A: '_', B: '_', C: '_', D: 'k', E: 'k', F: 'k', G: '_', H: '_' },
  5: { A: '_', B: '_', C: '_', D: 'k', E: '_', F: '_', G: '_', H: '_' },
  6: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_' },
  7: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_' },
  8: { A: '_', B: '_', C: '_', D: '_', E: '_', F: '_', G: '_', H: '_' },
}

test('Returns the expected board state', () => {
  const board = z.gameboard()
  z.gameboard(board, 'D4')
  z.gameboard(board, 'D5')
  z.gameboard(board, 'E4')
  z.gameboard(board, 'E3')
  z.gameboard(board, 'F4')

  expect(board).toEqual(result)
})

test('Gameboard container knight', () => {
  const board = z.gameboard()
  z.gameboard(board, 'D4')
  const flattenedArray = Object.values(board).flatMap((obj) =>
    Object.values(obj)
  )

  expect(flattenedArray).toContain('k')
})
