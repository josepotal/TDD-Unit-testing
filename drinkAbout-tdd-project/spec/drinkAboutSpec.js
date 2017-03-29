describe('a function that', function () {
  it('should exist', function () {
    expect(drinkAbout).toBeDefined()
  })
  it('should return a string', function () {
    var result = drinkAbout(1000)
    expect(typeof result).toEqual('string')
  })
  it('should return "Kids drink Toddy" if age is less than 14', function () {
    var children = drinkAbout(12)
    expect(children).toEqual('Kids drink Toddy')
  })
  it('should return "Teens drink coke" if age is between 14-17', function () {
    var teens = drinkAbout(16)
    expect(teens).toEqual('Teens drink coke')
  })
  it('should return "Young adults drink beer" if age is between 18-20', function () {
    var youngAdults = drinkAbout(20)
    expect(youngAdults).toEqual('Young adults drink beer')
  })
  it('should return "Adults drink whisky" if age is between 21-99', function () {
    var adults = drinkAbout(21)
    expect(adults).toEqual('Adults drink whisky')
  })
  it('should return "please enter a number under 100" if input is not a number  and is greater than 100', function () {
    var isNotNumber = drinkAbout('hgjj')
    expect(isNotNumber).toEqual('Please enter a number under 100')
  })
})
