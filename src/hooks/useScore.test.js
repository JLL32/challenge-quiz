import { renderHook } from '@testing-library/react-hooks'
import useScore from './useScore'

describe('useScore', () => {
  const answeredQuestions = 15
  const correctAnswers = 10
  const count = 20
  const { result } = renderHook(
    () => useScore(answeredQuestions, correctAnswers, count))
  const { score, maxScore, minScore } = result.current

  it('score should be 67%', () => {
    expect(score).toBe(67)
  })
  it('max score should be 75%', () => {
    expect(maxScore).toBe(75)
  })
  it('min score should be 50%', () => {
    expect(minScore).toBe(50)
  })
})
