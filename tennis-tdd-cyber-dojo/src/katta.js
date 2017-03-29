var tennisGame = {
  countPlayer1: 0,
  countPlayer2: 0,
  currentScore: currentScore,
  play: play
}

function play () {
  var p1 = Math.random()
  var p2 = Math.random()
  if (p1 > p2) {
    tennisGame.countPlayer1 += 1
  } else if (p2 > p1) {
    tennisGame.countPlayer2 += 1
  } else {
    alert('repeat the point')
  }
  return tennisGame.countPlayer1 + ' / ' + tennisGame.countPlayer2
}

function currentScore (arg1, arg2) {
  // play()

  var pointsP1, pointsP2, tennisPointsP1, tennisPointsP2, result
  var punctuation = {0: 'love', 1: 'fifteen', 2: 'thirty', 3: 'forty'}
  pointsP1 = arg1 // tennisGame.countPlayer1
  pointsP2 = arg2// tennisGame.countPlayer2
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
  // function gameover () {
  //   var finalResult = ''
  //   if (tennisPointsP1 >= 4 && (tennisPointsP1 - tennisPointsP2) > 1) {
  //     var finalResult = 'player 1 wins'
  //   } else if (tennisPointsP2 >= 4 && (tennisPointsP2 - tennisPointsP1) > 1) {
  //     finalResult = 'player 2 wins'
  //   } else {
  //     finalResult = 'keep playing'
  //   }
  //   return finalResult
  // }

/* You task is to implement a tennis scoring program.
Summary of tennis scoring:

1. A game is won by the first player to have won at
   least four points in total and at least two points
   more than the opponent.

2. The running score of each game is described in a
   manner peculiar to tennis: scores from zero to three
   points are described as "love", "fifteen", "thirty",
   and "forty" respectively.

3. If at least three points have been scored by each
   player, and the scores are equal, the score is "deuce".

4. If at least three points have been scored by each
   side and a player has one more point than his opponent,
   the score of the game is "advantage" for the player
   in the lead.

[source http://en.wikipedia.org/wiki/Tennis#Scoring] */
