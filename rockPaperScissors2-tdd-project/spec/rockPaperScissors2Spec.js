// https://github.com/juanmaguitar/exercises-katas-js/tree/master/RockPaperScissors

// First test the functions separately and when the unit tests are passed, we can refactor the code and put it all together under
// the function rockPaperScissors()
describe('an object game that', function () {
  it('should exist', function () {
    expect(game).toBeDefined()
  })
  it('should return a string', function () {
    // var result = rockPaperScissors2()
    expect(typeof game).toEqual('object')
  })
  it('should generate random choice if arg2 is empty', function () {
    var result = game.rockPaperScissors('PAPER')
    var pos = ['PAPER', 'SCISSORS', 'ROCK']
    expect(pos).toContain('PAPER')  // how can I test more than one result? or use toContain()
  })
  it('should return tie if arg1 and arg2 are the same', function () {
    var result = game.rockPaperScissors('PAPER', 'PAPER')
    expect(result).toEqual('PAPER vs PAPER => tie!')
  })
  it('should return ROCK wins if the other is scissors', function () {
    var result = game.rockPaperScissors('ROCK', 'SCISSORS')
    expect(result).toEqual('ROCK vs SCISSORS => ROCK wins!')
  })
  it('has player1 property', function () {
    // var result = game.rockPaperScissors('ROCK', 'SCISSORS')
    expect(game.player1).toBeDefined()
  })
  it('has winner() method', function () {
    // var result = game.rockPaperScissors('ROCK', 'SCISSORS')
    expect(game.winner()).toBeDefined()
  })
  it('has winner() method that returns string', function () {
    var result = game.winner()
    expect(typeof result).toEqual('string')
  })
  it('', function () {
    expect().toEqual()
  })
})

