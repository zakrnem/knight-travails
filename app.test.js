const z = require('./app.js')

const startCoordinates = ['D', 4]
const endCoordinates = ['B', 5]
const result = [startCoordinates, endCoordinates]

test(
  'Returns the coordinates of the shortest path between two cells on the chessboard.'
),
  () => {
    expect(someFunction([startCoordinates, endCoordinates].toEqual(result)))
  }
