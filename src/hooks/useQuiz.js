import { useState } from 'react'
import useScore from './useScore'
import questions from '../questions.json'

export default useQuiz

function useQuiz () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState(undefined)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const currentQuestion = decodeQuestion(questions[currentIndex])
  currentQuestion.title = `Question ${currentIndex + 1} of ${questions.length}`
  const progress = (100 / questions.length) * (currentIndex + 1)
  const count = questions.length
  const isCorrect = answer === currentQuestion.correct_answer
  const isLastQuestion = currentIndex === count - 1
  const answeredQuestions = answer ? currentIndex + 1 : currentIndex

  return {
    currentQuestion,
    answer,
    progress,
    ...useScore(answeredQuestions, correctAnswers, questions.length),
    choose,
    getNextQuestion,
    retry,
    count,
    isCorrect,
    isLastQuestion
  }

  function choose (choice) {
    setAnswer(choice)
    if (choice === currentQuestion.correct_answer) {
      setCorrectAnswers(correctAnswers + 1)
    }
  }

  function getNextQuestion () {
    setAnswer(undefined)
    setCurrentIndex(currentIndex + 1)
  }

  function retry () {
    setAnswer(undefined)
    setCurrentIndex(0)
    setCorrectAnswers(0)
  }
}

function decodeQuestion (question) {
  const newQuestion = { ...question }
  newQuestion.category = decodeURIComponent(question.category)
  newQuestion.question = decodeURIComponent(question.question)
  newQuestion.correct_answer = decodeURIComponent(question.correct_answer)
  newQuestion.incorrect_answers = question.incorrect_answers
    .map(answer => decodeURIComponent(answer))
  return newQuestion
}
