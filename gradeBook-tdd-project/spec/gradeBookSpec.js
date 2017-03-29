describe('a function that', function () {
  it('should exist', function () {
    expect(gradeBook).toBeDefined()
  })
  it('should return a string', function () {
    var result = gradeBook(1000, 1000, 1000)
    expect(typeof result).toEqual('string')
  })
  it('should return "A" if 90 <= score <= 100', function () {
    var result = gradeBook(100, 100, 100)
    expect(result).toEqual('A')
  })
  it('should return "B" if 80 <= score < 90', function () {
    var result = gradeBook(89, 89, 89)
    expect(result).toEqual('B')
  })
  it('should return "C" if 70 <= score < 80', function () {
    var result = gradeBook(75, 75, 75)
    expect(result).toEqual('C')
  })
  it('should return "D" if 60 <= score < 70', function () {
    var result = gradeBook(65, 65, 65)
    expect(result).toEqual('D')
  })
  it('should return "F" if 0 <= score < 60', function () {
    var result = gradeBook(22, 33, 44)
    expect(result).toEqual('F')
  })
  it('should return "please enter a number" if input is not a number', function () {
    var isNotNumber = gradeBook('hgjj', 'ioo', '3124')
    expect(isNotNumber).toEqual('Please enter a number')
  })
})
