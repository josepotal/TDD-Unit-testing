function gradeBook (score1, score2, score3) {
  score = (score1 + score2 + score3) / 3
  if (score >= 90 && score <= 100) {
    return 'A'
  } else if (score >= 80 && score < 90) {
    return 'B'
  } else if (score >= 70 && score < 80) {
    return 'C'
  } else if (score >= 60 && score < 70) {
    return 'D'
  } else if (score >= 0 && score < 60) {
    return 'F'
  }
  return 'Please enter a number'
}
