function drinkAbout (age) {
  if (age < 14) {
    return 'Kids drink Toddy'
  } else if (age < 18 && age >= 14) {
    return 'Teens drink coke'
  } else if (age < 21 && age >= 18) {
    return 'Young adults drink beer'
  } else if (age <= 99 && age >= 21) {
    return 'Adults drink whisky'
  } else {
    return 'Please enter a number under 100'
  }
}
