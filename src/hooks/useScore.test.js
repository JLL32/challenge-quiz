import { renderHook } from '@testing-library/react-hooks'
import useScore from './useScore'

describe('useScore', () => {
  it('score, max score, min score should be 67%, 75%, 50%', () => {
    const answeredQuestions = 15
    const correctAnswers = 10
    const count = 20
    const { result } = renderHook(
      () => useScore(answeredQuestions, correctAnswers, count))
    const { score, maxScore, minScore } = result.current
    expect(score).toBe(67)
    expect(maxScore).toBe(75)
    expect(minScore).toBe(50)
  })
})
