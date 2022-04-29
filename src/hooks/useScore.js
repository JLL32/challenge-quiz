export default useScore

function useScore (answeredQuestions, correctAnswers, count) {
  const score = answeredQuestions > 0
    ? Math.round(correctAnswers / answeredQuestions * 100)
    : 0

  const maxScore = 100 - Math.round(
    (answeredQuestions - correctAnswers) / count * 100)
  const minScore = Math.round(
    maxScore - (count - answeredQuestions) / count * 100)
  return { score, maxScore, minScore }
}
