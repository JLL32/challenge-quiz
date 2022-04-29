import useChoices from './useChoices'
import { renderHook, act } from '@testing-library/react-hooks'
import questions from '../questions.json'

describe('useChoices', () => {
  const question = questions[0]
  const correctAnswer = decodeURIComponent(question.correct_answer)
  const incorrectAnswers = question.incorrect_answers.map(answer => decodeURIComponent(answer))

  it('should return an array of choices', () => {
    const { result } = renderHook(() => useChoices(correctAnswer, incorrectAnswers))
    expect(Array.isArray(result.current.choices)).toBe(true)
  })

  it('should return an array of shuffled choices', () => {
    expect((() => {
      for (let i = 0; i < 10; i++) {
        const { result } = renderHook(() => useChoices(correctAnswer, incorrectAnswers))
        const { result: result2 } = renderHook(() => useChoices(correctAnswer, incorrectAnswers))
        if (result.current.choices.join('') !== result2.current.choices.join('')) {
          return true
        }
      }
    })()).toBe(true)
  })
})
