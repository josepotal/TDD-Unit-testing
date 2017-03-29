// https://github.com/juanmaguitar/exercises-katas-js/tree/master/RockPaperScissors
describe('a function that', function () {
  it('should exist', function () {
    expect(rockPaperScissors).toBeDefined()
  })
  it('should return a string', function () {
    var result = rockPaperScissors()
    expect(typeof result).toEqual('string')
  })
  it('should generate random choice if arg2 is empty', function () {
    var result = getMove2()
    expect(result).toEqual('PAPER')  // how can I test more than one result?
  })
  it('should generate random choice if arg2 is empty', function () {
    var result = getMove2()
    a = ['PAPER', 'SCISSORS', 'ROCK']
    expect(a).toContain(result)  // how can I test more than one result?
  })
  it('should return tie if arg1 and arg2 are the same', function () {
    var result = rockPaperScissors('PAPER', 'PAPER')
    expect(result).toEqual('PAPER vs PAPER => tie!')

    var result = rockPaperScissors('PAPER', 'SCISSORS')
    expect(result).toEqual('PAPER vs SCISSORS => SCISSORS wins!')
  })
  it('should return ROCK wins if the other is scissors', function () {
    var result = rockPaperScissors('ROCK', 'SCISSORS')
    expect(result).toEqual('ROCK vs SCISSORS => ROCK wins!')
  })
})

