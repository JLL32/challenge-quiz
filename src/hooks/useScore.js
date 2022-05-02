export default useScore

function useScore (answeredQuestions, correctAnswers, count) {
  if (answeredQuestions === 0) {
    return {
      score: 0,
      maxScore: 100,
      minScore: 0
    }
  }

  const score = Math.round(correctAnswers / answeredQuestions * 100)
  const maxScore = 100 - Math.round(
    (answeredQuestions - correctAnswers) / count * 100)
  const minScore = Math.round(correctAnswers / count * 100)

  return { score, maxScore, minScore }
}
