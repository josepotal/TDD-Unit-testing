describe('a function that', function () {
  it('should exist', function () {
    expect(fizzBuzz).toBeDefined()
  })
  it('should return an array', function () {
    var result = fizzBuzz()
    expect(result instanceof Array).toBeTruthy()
  })
  it('should return an array of length 100', function () {
    var result = fizzBuzz().length
    expect(result).toEqual(100)
  })
  it('should return "Fizz" in postition multiple of 3', function () {
    var result = fizzBuzz()
    expect(result[2]).toEqual('Fizz')
  })
  it('should return "Buzz" in position multiple of 5', function () {
    var result = fizzBuzz()
    expect(result[4]).toEqual('Buzz')
  })
  it('should return "FzzBuzz" in positions both multiple of 3 and 5', function () {
    var result = fizzBuzz()
    expect(result[14]).toEqual('FizzBuzz')
  })
})
