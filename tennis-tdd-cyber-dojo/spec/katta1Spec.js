//
describe('a function currentScore that', function () {
  it('should exist', function () {
    expect(currentScore).toBeDefined()  // assertions
  })

  it('should return a string', function () {
    var result = currentScore()  // save the result into a var
    expect(typeof result).toEqual('string')
  })
})

describe('a function that end the game and restart the count', function () {
  it('should return player1 won game if a p1 has scored 4 or more points and with at least a difference of 2 points', function () {
    var result = currentScore(4, 2)  // save the result into a var
    expect(result).toEqual('player 1 wins')
  })
  it('should return player2 won game if a p2 has scored 4 or more points and with at least a difference of 2 points', function () {
    var result = currentScore(1, 4)  // save the result into a var
    expect(result).toEqual('player 2 wins')
  })
})

describe('should return a function that counts the results in tennistic form', function () {
  it('should return Current result: thirty - forty if p1 score 2 points and p2 scored 3 points', function () {
    var result = currentScore(2, 3)  // save the result into a var
    expect(result).toEqual('Current result: thirty - forty')
  })

  it('should return Current result: love - thirty if p1 has not scored and p2 scored 2 points)', function () {
    var result = currentScore(0, 2)  // save the result into a var
    expect(result).toEqual('Current result: love - thirty')
  })

  it('should return "deuce" if p1 and p2 has the same points, higher or equal than 4)', function () {
    var result = currentScore(4, 4)  // save the result into a var
    expect(result).toEqual('Current result: deuce')
  })

  it('should return "adavantage player 1" if player1 has more than 4 points and the difference with player2 is one point)', function () {
    var result = currentScore(5, 4)  // save the result into a var
    expect(result).toEqual('Current result: Advantage Player1')
  })
})
