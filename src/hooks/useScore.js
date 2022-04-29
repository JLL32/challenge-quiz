export default useScore

function useScore (answeredQuestions, correctAnswers, count) {
  const score = answeredQuestions > 0
    ? Math.floor(correctAnswers / answeredQuestions * 100)
    : 0
  const maxScore = 100 - Math.floor(
    (answeredQuestions - correctAnswers) / count * 100)
  const minScore = Math.floor(
    maxScore - (count - answeredQuestions) / count * 100)
  return { score, maxScore, minScore }
}
