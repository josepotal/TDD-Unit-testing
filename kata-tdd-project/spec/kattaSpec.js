describe('a function sum that', function () {
  it('should exist', function () {
    expect(sum).toBeDefined()  // assertions
  })

  it('should return a number', function () {
    var result = sum(2, 3)  // save the result into a var
    expect(typeof result).toEqual('number')
  })

  it('should return 5 when sum(2,3)', function () {
    var result = sum(2, 3)  // save the result into a var
    expect(result).toEqual(5)
  })

  it('should return 10 when sum(7,3)', function () {
    var result = sum(7, 3)  // save the result into a var
    expect(result).toEqual(10)
  })

  it("should return 10 when sum('7',3)", function () {
    var result = sum('7', 3)  // save the result into a var
    expect(result).toEqual(10)
  })

  it("should return 10 when sum('7','3')", function () {
    var result = sum('7', '3')  // save the result into a var
    expect(result).toEqual(10)
  })
})
