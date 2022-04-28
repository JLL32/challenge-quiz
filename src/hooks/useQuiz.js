import { useState } from 'react'
import questions from '../questions.json'
import useScore from './useScore'

function useQuiz () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState(undefined)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  const currentQuestion = decodeQuestion(questions[currentIndex])
  currentQuestion.title = `Question ${currentIndex + 1} of ${questions.length}`
  const progress = (100 / questions.length) * (currentIndex + 1)
  const count = questions.length

  return {
    currentIndex,
    currentQuestion,
    answer,
    progress,
    ...useScore(answeredQuestions, correctAnswers, questions.length),
    choose,
    getNextQuestion,
    retry,
    count
  }

  function choose (choice) {
    setAnsweredQuestions(answeredQuestions + 1)
    setAnswer(choice)
    if (choice === currentQuestion.correct_answer) { increaseCorrectAnswers() }
  }

  function increaseCorrectAnswers () {
    setCorrectAnswers(correctAnswers + 1)
  }

  function getNextQuestion () {
    setAnswer(undefined)
    setCurrentIndex(currentIndex + 1)
  }

  function retry () {
    setAnswer(undefined)
    setCurrentIndex(0)
    setCorrectAnswers(0)
    setAnsweredQuestions(0)
  }
}

export default useQuiz

function decodeQuestion (question) {
  const newQuestion = { ...question }
  newQuestion.category = decodeURIComponent(question.category)
  newQuestion.question = decodeURIComponent(question.question)
  newQuestion.correct_answer = decodeURIComponent(question.correct_answer)
  newQuestion.incorrect_answers = question.incorrect_answers
    .map(answer => decodeURIComponent(answer))
  return newQuestion
}
