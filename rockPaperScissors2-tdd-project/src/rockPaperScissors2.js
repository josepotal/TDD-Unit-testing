// https://github.com/juanmaguitar/exercises-katas-js/tree/master/RockPaperScissors
var game = {
  player1: 0,
  player2: 0,
  rockPaperScissors: rockPaperScissors,
  winner: winner
}

function winner () {
  var whoWins = ''
  if (game.player1 > game.player2) {
    whoWins = 'player1 is winnning!'
  } else if (game.player1 < game.player2) {
    whoWins = 'player2 is winning!'
  } else {
    whoWins = 'It is a tie between player1 and player2'
  }
  return whoWins
}

function rockPaperScissors (move1, move2) {
  var result = ''
  var score1 = game.player1
  var score2 = game.player2

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
        score2 = score2 + 1
      } else if (move2 === 'ROCK') {
        result = move1 + ' vs ' + move2 + ' => ' + move1 + ' wins!'
        score1 = score1 + 1
      }
    } else if (move1 === 'SCISSORS') {
      if (move2 === 'ROCK') {
        result = move1 + ' vs ' + move2 + ' => ' + move2 + ' wins!'
        score2 = score2 + 1
      } else if (move2 === 'PAPER') {
        result = move1 + ' vs ' + move2 + ' => ' + move1 + ' wins!'
        score1 = score1 + 1
      }
    } else if (move1 === 'ROCK') {
      if (move2 === 'PAPER') {
        result = move1 + ' vs ' + move2 + ' => ' + move2 + ' wins!'
        score2 = score2 + 1
      } else if (move2 === 'SCISSORS') {
        result = move1 + ' vs ' + move2 + ' => ' + move1 + ' wins!'
        score1 = score1 + 1
      }
    }
    game.player1 = score1
    game.player2 = score2
    return result
  }
}
