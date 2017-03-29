// https://github.com/juanmaguitar/exercises-katas-js/tree/master/RockPaperScissors
function rockPaperScissors (move1, move2) {
  var result = ''
  if (arguments.length < 2) {
    move2 = getMove2()
  }
  return logic()

  function getMove2 () {
    var value = Math.floor(Math.random() * 3)
    if (value === 0) {
      move2 = 'PAPER'
    } else if (value === 1) {
      move2 = 'SCISSORS'
    } else {
      move2 = 'ROCK'
    }
    return move2
  }

  function logic () {
    if (move1 === move2) {
      result = move1 + ' vs ' + move2 + ' => tie!'
    } else if (move1 === 'PAPER') {
      if (move2 === 'SCISSORS') {
        result = move1 + ' vs ' + move2 + ' => ' + move2 + ' wins!'
      } else if (move2 === 'ROCK') {
        result = move1 + ' vs ' + move2 + ' => ' + move1 + ' wins!'
      }
    } else if (move1 === 'SCISSORS') {
      if (move2 === 'ROCK') {
        result = move1 + ' vs ' + move2 + ' => ' + move2 + ' wins!'
      } else if (move2 === 'PAPER') {
        result = move1 + ' vs ' + move2 + ' => ' + move1 + ' wins!'
      }
    } else if (move1 === 'ROCK') {
      if (move2 === 'PAPER') {
        result = move1 + ' vs ' + move2 + ' => ' + move2 + ' wins!'
      } else if (move2 === 'SCISSORS') {
        result = move1 + ' vs ' + move2 + ' => ' + move1 + ' wins!'
      }
    }
    return result
  }
}

