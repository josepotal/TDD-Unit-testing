var tennisGame = {
  countPlayer1: 0,
  countPlayer2: 0,
  currentScore: currentScore
}

function currentScore (arg1, arg2) {
  // function play () {
  //   var p1 = Math.random()
  //   var p2 = Math.random()
  //   if (p1 > p2) {
  //     tennisGame.countPlayer1 += 1
  //   } else if (p2 > p1) {
  //     tennisGame.countPlayer2 += 1
  //   } else {
  //     alert('repeat the point')
  //   }
  //   return tennisGame.countPlayer1 + ' / ' + tennisGame.countPlayer2
  // }

  // play()

  var pointsP1, pointsP2, tennisPointsP1, tennisPointsP2, result
  var punctuation = {0: 'love', 1: 'fifteen', 2: 'thirty', 3: 'forty'}
  pointsP1 = arg1
  pointsP2 = arg2
  tennisPointsP1 = punctuation[pointsP1]
  tennisPointsP2 = punctuation[pointsP2]

  if (pointsP1 >= 3 && (pointsP1 - pointsP2) === 0) {
    result = 'Current result: ' + 'deuce'
  } else if (pointsP1 >= 4 && (pointsP1 - pointsP2) === 1) {
    result = 'Current result: Advantage Player1'
  } else if (pointsP2 >= 4 && (pointsP2 - pointsP1) === 1) {
    result = 'Current result: Advantage Player2'
  } else if (pointsP1 >= 4 && (pointsP1 - pointsP2) > 1) {
    result = 'player 1 wins'
    tennisGame.countPlayer1 = 0
    tennisGame.countPlayer2 = 0
  } else if (pointsP2 >= 4 && (pointsP2 - pointsP1) > 1) {
    result = 'player 2 wins'
    tennisGame.countPlayer1 = 0
    tennisGame.countPlayer2 = 0
  } else {
    result = 'Current result: ' + tennisPointsP1 + ' - ' + tennisPointsP2
  }

  return result
}

