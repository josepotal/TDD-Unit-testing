//
describe('a function play that', function () {
  it('shoud generate two random numbers', function () {
    var tennisGame = { countPlayer1: 0, countPlayer2: 0, play: play }
    var result = play()  // save the result into a var
    var points1 = tennisGame.countPlayer1
    var points2 = tennisGame.countPlayer2
    expect(typeof points1).toEqual('number')
    expect(typeof points2).toEqual('number')
  })
})

describe('a function currentScore that', function () {
  var result = ''

  beforeEach(function() {
    result = ''
  })

  afterEach(function() {
    result ='';
  });

  it('should exist', function () {
    expect(currentScore).toBeDefined()  // assertions
  })

  it('should return a string', function () {
    result = currentScore()  // save the result into a var
    expect(typeof result).toEqual('string')
  })

  it('should return player2 won game if a p2 has scored 4 or more points and with at least a difference of 2 points', function () {
    result = currentScore(1, 4)  // save the result into a var
    expect(result).toEqual('player 2 wins')
  })

  it('should return Current result: thirty - forty if p1 score 2 points and p2 scored 3 points', function () {
    result = currentScore(2, 3)  // save the result into a var
    expect(result).toEqual('Current result: thirty - forty')
  })

  it('should return Current result: love - thirty if p1 has not scored and p2 scored 2 points)', function () {
    result = currentScore(0, 2)  // save the result into a var
    expect(result).toEqual('Current result: love - thirty')
  })

})

describe('a function currentScore that in case of thight game', function () {
  var result = ''

  beforeEach(function() {
    result = ''
  })

  afterEach(function() {
    result ='';
  });


  it('should return "deuce" if p1 and p2 has the same points, higher or equal than 4)', function () {
    result = currentScore(4, 4)  // save the result into a var
    expect(result).toEqual('Current result: deuce')
  })

  it('should return "adavantage player 1" if player1 has more than 4 points and the difference with player2 is one point)', function () {
    result = currentScore(5, 4)  // save the result into a var
    expect(result).toEqual('Current result: Advantage Player1')
  })

})
